import { Button, Container, ButtonGroup } from '@mui/material'
import type { NextPage } from 'next'
import  StoreIntro  from 'sections/StoreIntroSection'
import React from 'react'
import StoreCatalog from 'sections/StoreCatalogSection'
import ProductDetails from 'sections/ProductDetailsSection'
import PaymentSelect from 'sections/PaymentSelectSection'
import SectionRouter from 'components/SectionRouter'
import CartDetails from 'sections/CartDetails'
import DeliverySelect from 'sections/DeliverySelectSection'
import DeliveryAddress from 'sections/DeliveryAddress'
import ContactDetails from 'sections/ContactDetails'
import Instructions from 'sections/Instructions'







const Home: NextPage = () => {
  // todo - put a nice progress bar up top
  return (
    <>
      <Container maxWidth='sm' sx={{
        height: '100%',
        display: 'flex',
        flex: 1,
        width: '100%',
        position: 'relative'
      }} >
        <SectionRouter>
          <StoreIntro hash='/' />
          <StoreCatalog hash='catalog' />
          <ProductDetails hash='details' />
          <CartDetails hash='cart' />
          <PaymentSelect hash='payment' />
          <DeliverySelect hash='delivery' />
          <DeliveryAddress hash='address' />
          <ContactDetails hash='contact' />
          <Instructions hash='instructions' />
        </SectionRouter>

      </Container>
    </>
  )
}

export default Home


