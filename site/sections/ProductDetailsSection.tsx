import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { OptionInput, SelectInput } from 'components/OptionSelect';
import { QuantitySelect } from 'components/QuantitySelectInput';
import Section from '../components/Section';
import { useRouter } from 'next/dist/client/router';
import FloatButton from 'components/FloatButton';
import CustomButton from 'components/CustomButton';
import CartContext from 'context/CartContext'
import StoreContext from 'context/StoreContext';
import ComponentWithError from 'components/ComponentWithError'
import theme from 'styles/theme';
import Error from 'next/error'
import printCurrencyPrice from 'utils/printCurrencyPrice';

interface Props {
  hash: string
  data?: { id: string }
}

function ProductDetails(props: Props) {

  const router = useRouter()
  const cart = React.useContext(CartContext)
  const store = React.useContext(StoreContext)
  const product = store.store?.products?.__typename === 'ProductList' ?
    store.store?.products.list.find(p =>
      props.data?.id === p.id) : null
  const [optionName, setOptionName] = useState<string>(product?.productOptions?.[0]?.name ?? '')
  const [additions, setAdditions] = useState<string[]>(product?.productAdditions?.length ? [product?.productAdditions?.[0].name] : [])
  const [quantity, setQuantity] = useState<number>(1)

  if (store && !product) {
    return <Error statusCode={404} title='Product not found' />
  }

  const checkValid = () => {
    const optionValid = product?.productOptions?.length ? optionName.length >= 1 : true
    const quantityValid = quantity >= 1
    return optionValid && quantityValid
  }

  const submit = () => {
    cart.addUpdateItem({
      additions,
      option: optionName,
      productName: product?.name ?? '',
      productId: product?.id ?? '',
      quantity
    })
    resetValues()
    router.push('#catalog')
  }

  const resetValues = () => {
    setQuantity(1)
    setAdditions([])
    setOptionName('')
  }



  return <Stack
    height={'100%'}
    justifyContent='center'

  >
    <Stack
      height='100%'
      gap={4}
    >
      <Stack
        height='100%'
        // gap={2}
        marginTop='auto'
      >
        {!!product?.imageUrl?.length && <img style={{
          marginTop: 10,
          aspectRatio: '1/1',
          objectFit: 'cover',
          borderRadius: 10
        }} alt={product?.name} width='100%' src={product?.imageUrl?.[0]?.full} />}

        <Typography gutterBottom variant='h6' marginTop={2} textAlign='center' component='h1'>
          {product?.name}
        </Typography>
        <Typography gutterBottom variant='body1' textAlign='center'>
          {product?.description}
        </Typography>
      </Stack>
      {!!product?.productOptions?.length &&
        <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Options'>
          <>
            <OptionInput
              value={optionName}
              options={product?.productOptions?.map(option => ({
                text: option.name,
                value: option.name,
                additionalText: printCurrencyPrice(store.store?.currency?.symbol, option.price?.value)
              }))}
              onChange={value => setOptionName(value)}
            />
          </>
        </Section>
      }
      {
        !!product?.productAdditions?.length &&
        <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Additions'>
          <>

            <SelectInput
              value={additions}
              options={product?.productAdditions.map(addition => ({
                text: addition.name,
                value: addition.name,
                additionalText: printCurrencyPrice(store.store?.currency?.symbol, addition.price?.value)
              }))}
              onChange={additions => setAdditions(additions)}
            />
          </>
        </Section>
      }
      <FloatButton>
        <Card variant='elevation' elevation={8} sx={{ padding: 1 }}>
          <QuantitySelect
            value={quantity}
            onChange={setQuantity}
          />
          <CustomButton disabled={!checkValid()} onClick={submit} >Add to Cart</CustomButton>
        </Card>
      </FloatButton>
    </Stack>

  </Stack>


}

export default ProductDetails

