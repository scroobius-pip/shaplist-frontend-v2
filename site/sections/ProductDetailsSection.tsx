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
import ComponentWithError from 'components/ComponentWithError';
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
      return <Stack gap={4} >
        <Box>
          {!!product?.imageUrl?.length && <img style={{
            aspectRatio: '1/1',
            objectFit: 'cover',
            // borderRadius: 10
          }} alt={product?.name} width='100%' src={product?.imageUrl?.[0]?.full} />}

          <Typography gutterBottom variant='h5' textAlign='center' component='h1'>
            {product?.name}
          </Typography>
          <Typography gutterBottom variant='body1' textAlign='center'>
            {product?.description}
          </Typography>
        </Box>
        {/* <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Select an option'>
          <OptionInput value={cart.state.items} options={product?.productOptions} onChange={setOption} />
        </Section>
        <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Additions'>
          <SelectInput value={addition} options={additions} onChange={setAddition} />
        </Section> */}
        <FloatButton>

          <Card variant='elevation' elevation={12} sx={{ padding: 1 }}>
            <QuantitySelect />
            <CustomButton onClick={() => router.push('#catalog')} >Add to Cart</CustomButton>

          </Card>
        </FloatButton>
      </Stack>
    }}
  </ComponentWithError>
}

export default ProductDetails

