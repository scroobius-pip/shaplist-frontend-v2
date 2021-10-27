import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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

interface Props {
  hash: string
  data?: { id: string }
}

function ProductDetails(props: Props) {

  const router = useRouter()
  const cart = React.useContext(CartContext)
  const store = React.useContext(StoreContext)

  return <ComponentWithError
    data={store.store?.products}
    errorComponent={<></>}
  >
    {(products) => {
      const product = products.list.find(p => props.data?.id === p.id)
      return <Stack
        height={'100%'}
        justifyContent='center'
        sx={{
          // backgroundColor: 'white',
          // padding: 2,
          // marginY: 2,
          // border: 'solid 1px',
          // borderColor: theme.palette.divider,
          // borderRadius: 1
        }}
      >
        <Stack
          gap={4}
        >
          <Stack
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
          {/* <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Select an option'>
          <OptionInput value={cart.state.items} options={product?.productOptions} onChange={setOption} />
        </Section>
        <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Additions'>
          <SelectInput value={addition} options={additions} onChange={setAddition} />
        </Section> */}

        </Stack>
        <FloatButton>
          <Card variant='elevation' elevation={8} sx={{ padding: 1 }}>
            <QuantitySelect />
            <CustomButton onClick={() => router.push('#catalog')} >Add to Cart</CustomButton>
          </Card>
        </FloatButton>
      </Stack>
    }}
  </ComponentWithError>
}

export default ProductDetails

