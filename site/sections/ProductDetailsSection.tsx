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
import { DProduct, DStore } from 'types/types';
import { err, ok, Result } from 'neverthrow'
interface Props {
  hash: string
  data?: { id: string }
}

interface ProductDetailsProps {
  product: DProduct
  store?: DStore
}

function ProductDetails({ product, store }: ProductDetailsProps) {

  const router = useRouter()
  const cart = React.useContext(CartContext)

  const initialOptionName = product?.productOptions?.[0]?.name ?? ''
  const [optionName, setOptionName] = useState<string>(initialOptionName)

  const initialAdditions = product?.productAdditions?.length ? [product?.productAdditions?.[0].name] : []
  const [additions, setAdditions] = useState<string[]>(initialAdditions)

  const [quantity, setQuantity] = useState<number>(1)


  const checkValid = () => {
    const optionValid = product?.productOptions?.length ? optionName.length >= 1 : true
    const quantityValid = quantity >= 1
    return optionValid && quantityValid
  }

  const calculateUnitPrice = (): number => {
    //get current option price or fallback to product price
    const optionPrice = ((product?.productOptions ?? []).find(o => o.name === optionName)?.price?.value ?? 0) ?? product?.price?.value ?? 0
    // get all additions price or fallback to 0
    const additionPrice = additions.reduce((acc, curr) => {
      const addition = product?.productAdditions?.find(a => a.name === curr)
      return acc + (addition?.price?.value ?? 0)
    }, 0)

    return (optionPrice + additionPrice)

  }

  const submit = () => {
    cart.addUpdateItem({
      additions,
      option: optionName,
      productName: product.name,
      productId: product.id,
      quantity,
      unitPrice: calculateUnitPrice()
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
        marginTop='auto'
      >
        {
          !!product?.imageUrl?.length && <img style={{
            marginTop: 10,
            aspectRatio: '1/1',
            objectFit: 'cover',
            borderRadius: 10
          }} alt={product?.name} width='100%' src={product?.imageUrl?.[0]?.full}
          />
        }

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
                additionalText: printCurrencyPrice(store?.currency?.symbol, option.price?.value)
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
                additionalText: printCurrencyPrice(store?.currency?.symbol, addition.price?.value)
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




const ProductPropsGetter = (props: Props) => {
  const { store } = React.useContext(StoreContext)


  const getProductListFromStore = (store?: DStore): Result<DProduct[], string> => {
    if (store?.products?.__typename !== 'ProductList') {
      return err('Unable to get product list')
    } else {
      return ok(store?.products.list)
    }
  }

  const findProductFromList = (id?: string) => (productList: DProduct[],): Result<DProduct, string> => {
    const product = productList.find(p =>
      id === p.id)
    return product ? ok(product) : err('Product not found')
  }


  return getProductListFromStore(store)
    .andThen(findProductFromList(props.data?.id))
    .match(product => {
      return <ProductDetails
        product={product}
        store={store}
      />
    }, errorMessage => {
      return <Error statusCode={404} title={errorMessage} />
    })

}

export default ProductPropsGetter

