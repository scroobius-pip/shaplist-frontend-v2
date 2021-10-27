import { List, Stack, Typography } from '@mui/material'
import { ProductCard } from "../components/ProductCard"
import Section from 'components/Section'
import { useRouter } from 'next/dist/client/router'
import CartButton from 'components/CartButton'
import { StoreQuery } from 'generated/graphql'
import { IndexProps } from 'pages'
import ComponentWithError from 'components/ComponentWithError'

interface Props {
  hash: string
  store: NonNullable<IndexProps['store']>
}

function StoreCatalog(props: Props) {
  const router = useRouter()


  return (<Stack>
    <Section
      headingStyle={{ component: 'h1', variant: 'h4' }}
      heading='What would you like to order ?'
    >
      <ComponentWithError
        data={props.store.products}
        errorComponent={<Typography>No products</Typography>}
      >
        {
          (data) =>
            <List>
              {
                data.list.map(product =>
                  <ProductCard
                    key={product.id}
                    currency={props.store.currency as any}
                    product={product}
                    onClick={() => router.push(`#details?id=${product.id}`)}
                  />
                )
              }
              <CartButton
                text='View Cart'
                onClick={() => router.push('#cart')}
              />
            </List>

        }
      </ComponentWithError>


    </Section>
  </Stack>);
}

export default StoreCatalog