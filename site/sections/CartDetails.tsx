import { List, Stack, Divider } from '@mui/material'
import CartButton from 'components/CartButton'
import CartItem from 'components/CartItem'
import Section from 'components/Section'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const CartDetails = (props: { hash: string }) => {
    const router = useRouter()
    return <Stack height='100%'  >
        <Section
            subheading='Update your items by tapping on them'
            heading='Your Cart'
            headingStyle={{ component: 'h1', variant: 'h5' }}
        >
            <List  >
                <CartItem onClick={() => router.push('#details?aaa')} />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem title='Yoga' />

                <CartButton
                    text='Checkout'
                    onClick={() => router.push('#payment')}
                />


            </List>
        </Section>
    </Stack>
}

export default CartDetails