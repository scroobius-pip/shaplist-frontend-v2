import { Button, Container, ButtonGroup } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import StoreIntro from 'sections/StoreIntroSection'
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
import { getSdk, Store, StoreQuery } from 'generated/graphql'
import getStoreSlug from 'utils/getStoreSlug'
import { GraphQLClient } from 'graphql-request'
import { err, fromPromise, ok } from 'neverthrow'
import Error from 'next/error'
import { DStore } from 'types/types'
import CartContext, { useCart } from 'context/CartContext'
import { StoreQueryFactory } from 'mocks'
import StoreContext from 'context/StoreContext'



export type IndexProps = {
  store?: DStore
  error?: string
}



const Home: NextPage<IndexProps> = ({ store, error }) => {
  if (!store) {
    return <Error statusCode={404} title={error} />
  }

  const { imageUrl, description, products } = store
  const cart = useCart()
  return (
    <>
      <Container maxWidth='sm' sx={{
        height: '100%',
        display: 'flex',
        flex: 1,
        width: '100%',
        position: 'relative'
      }} >
        <StoreContext.Provider value={{ store }}>
          <CartContext.Provider value={cart}>
            <SectionRouter>
              <StoreIntro
                backgroundUrl={imageUrl?.full ?? ''}
                description={description ?? ''}
                hash='/' />
              <StoreCatalog
                store={store}
                hash='catalog'
              />
              <ProductDetails hash='details' />
              <CartDetails hash='cart' />
              <PaymentSelect hash='payment' />
              <DeliverySelect hash='delivery' />
              <DeliveryAddress hash='address' />
              <ContactDetails hash='contact' />
              <Instructions hash='instructions' />
            </SectionRouter>
          </CartContext.Provider>

        </StoreContext.Provider>
      </Container>
    </>
  )
}


export const getServerSideProps: GetServerSideProps<IndexProps> = async (context) => {

  return {
    props: {
      store: StoreQueryFactory.build()
    }
  }
  const getStoreInfo = getStoreSlug(context.req)
    .mapErr(e => e.message)
    .asyncAndThen(storeSlug => {
      const client = new GraphQLClient('https://yslrnf1myk.execute-api.us-east-1.amazonaws.com/dev/graphql')
      const sdk = getSdk(client)
      const storeQueryResult = fromPromise(sdk.Store({ storeFromSlugSlug: storeSlug }), _ => _?.message ?? 'Failed to get store')
      return storeQueryResult
    })
    .andThen<IndexProps['store'], string>(storeQueryResult => {
      console.log(storeQueryResult)
      switch (storeQueryResult.storeFromSlug?.__typename) {
        case 'Store':
          return ok(storeQueryResult.storeFromSlug)
        case 'Error':
          return err(storeQueryResult.storeFromSlug.message)
        default:
          return err('Unknown Error Occurred')
      }
    })
    .match<IndexProps>(result => {
      return {
        store: result
      }
    }, error => {

      return {
        error
      }
    })




  return {
    props: {
      ...await getStoreInfo
    }
  }
}

export default Home


// {
//   slug: "localhost:3000",
//   name: "test",
//   countriesSupported: [
//     "311194442263429699",
//   ],
//   links: [
//     {
//       name: "facebook",
//       value: "www.facebook.com",
//     },
//     {
//       name: "twitter",
//       value: "www.twitter.com",
//     },
//   ],
//   currencyId: "311191846564921924",
//   deliveryOptions: [
//     {
//       type: "SET_PRICE",
//       name: "Pickup",
//       instructions: "Come before 2pm",
//     },
//     {
//       type: "SET_PRICE",
//       cost: 300,
//       name: "Gwarinpa delivery",
//     },
//   ],
//   paymentOptions: [
//     {
//       name: "Bank transfer",
//       value: "fcmb 1252323025",
//       type: "BANK_TRANSFER",
//       instructions: "Pay into FCMB 1252323025",
//     },
//   ],
//   imageUrl: {
//     full: "",
//     preview: "",
//   },
//   contactChannel: {
//     phone_number: "07085243291",
//   },
// }


// {
//   created_at: 1634818929811,
//   name: "test",
//   slug: "localhost:3000",
//   updated_at: 1634818929812,
//   international_shipping_supported: false,
//   contact_channel: {
//     whatsapp_number: "",
//     phone_number: "07085243291",
//   },
//   currency: {
//     connect: "311191846317457989",
//   },
//   delivery_options: [
//     {
//       type: "SET_PRICE",
//       name: "Pickup",
//       instructions: "Come before 2pm",
//     },
//     {
//       type: "SET_PRICE",
//       cost: 300,
//       name: "Gwarinpa delivery",
//     },
//   ],
//   payment_options: [
//     {
//       name: "Bank transfer",
//       value: "fcmb 1252323025",
//       type: "BANK_TRANSFER",
//       instructions: "Pay into FCMB 1252323025",
//     },
//   ],
//   department: {
//     connect: "313009899735876171",
//   },
//   states_supported: {
//     connect: [
//     ],
//   },
//   countries_supported: {
//     connect: [
//       "311194442263429699",
//     ],
//   },
//   description: "everything is fine here come and see ou",
//   image_url: {
//     full: "",
//     preview: "",
//   },
//   links: [
//     {
//       name: "facebook",
//       value: "www.facebook.com",
//     },
//     {
//       name: "twitter",
//       value: "www.twitter.com",
//     },
//   ],
//   user: {
//     connect: "1234567890",
//   },
// }