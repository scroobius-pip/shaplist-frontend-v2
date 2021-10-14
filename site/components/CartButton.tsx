import { ArrowRight, ChevronRight } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/dist/client/router';
import CustomButton from './CustomButton';
import FloatButton from './FloatButton';

interface Props {
    text: string
    onClick: () => any
}
const CartButton = (props: Props) => {

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
                    <Typography variant='subtitle2' >3 Items</Typography>
                    <Typography variant='subtitle1'>$100</Typography>
                </Stack>
                <Typography variant='button'>{props.text}</Typography>
            </Box>
        </CustomButton >
    </FloatButton>

}


export default CartButton