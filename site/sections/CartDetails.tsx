import { List, Stack, Divider } from '@mui/material'
import CartButton from 'components/CartButton'
import CartItem from 'components/CartItem'
import Section from 'components/Section'
import CartContext from 'context/CartContext'
import StoreContext from 'context/StoreContext'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import printCurrencyPrice from 'utils/printCurrencyPrice'

const CartDetails = (props: { hash: string }) => {
    const router = useRouter()
    const cart = React.useContext(CartContext)
    const { store } = React.useContext(StoreContext)

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
                            price={printCurrencyPrice(store?.currency?.symbol, cartItem.unitPrice * cartItem.quantity)}
                            key={cartItemId}
                            quantity={cartItem.quantity}
                            onRemove={() => cart.deleteItem(cartItemId)}
                            onQuantityChange={(quantity) => {
                                if (quantity <= 0) {
                                    cart.deleteItem(cartItemId)
                                } else {
                                    cart.addUpdateItem({
                                        ...cartItem,
                                        quantity
                                    }, cartItemId)
                                }
                            }}
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