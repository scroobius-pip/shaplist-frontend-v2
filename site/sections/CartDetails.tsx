import { List, Stack, Divider } from '@mui/material'
import CartButton from 'components/CartButton'
import CartItem from 'components/CartItem'
import Section from 'components/Section'
import CartContext from 'context/CartContext'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const CartDetails = (props: { hash: string }) => {
    const router = useRouter()
    const cart = React.useContext(CartContext)

    return <Stack height='100%'  >
        <Section
            subheading='Update your items by tapping on them'
            heading='Your Cart'
            headingStyle={{ component: 'h1', variant: 'h5' }}
        >
            <List  >
                {
                    Object.entries(cart.state.items).map(([cartItemId, cartItem]) => {
                        return <CartItem
                            additions={cartItem.additions}
                            name={cartItem.productName}
                            option={cartItem.option}
                            price={300}
                            key={cartItemId}
                            onClick={() => router.push(`#edit?id=${cartItemId}`)}
                        />
                    })
                }
            </List>
        </Section>
        <CartButton
            text='Checkout'
            onClick={() => router.push('#payment')}
        />
    </Stack>
}

export default CartDetails