import { ArrowRight, ChevronRight } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/dist/client/router';
import CustomButton from './CustomButton';
import FloatButton from './FloatButton';
import CartContext from 'context/CartContext';
import StoreContext from 'context/StoreContext';
import printCurrencyPrice from 'utils/printCurrencyPrice';

interface Props {
    text: string
    onClick: () => any
}

const CartButton = (props: Props) => {

    const { state: { items } } = React.useContext(CartContext)
    const { store } = React.useContext(StoreContext)

    const total = () => Object.values(items).reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)


    return <FloatButton>
        <CustomButton
            onClick={props.onClick}
            icon={<ChevronRight />}
        >
            <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Stack textAlign='left'>
                    <Typography variant='subtitle2' >{Object.keys(items).length} Items</Typography>
                    <Typography variant='subtitle1'>{printCurrencyPrice(store?.currency?.symbol, total(), '-')}</Typography>
                </Stack>
                <Typography variant='button'>{props.text}</Typography>
            </Box>
        </CustomButton >
    </FloatButton>

}


export default CartButton