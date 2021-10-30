import { DeleteForever, Edit } from '@mui/icons-material'
import { ListItem, ListItemText, Stack, Typography, Divider, Button, IconButton } from '@mui/material'
import React from 'react'
import theme from 'styles/theme'
import { DProduct } from 'types/types'
import { QuantitySelect } from './QuantitySelectInput'

interface Props {
    name: string
    option: string
    additions: string[]
    price: number
    onClick?: () => any
}

const CartItem = (props: Props) => {
    return <>

        <ListItem
            onClick={props?.onClick}
            button
            secondaryAction={
                <Stack textAlign='right'>
                    <Typography variant='subtitle1'>$100</Typography>
                    {/* <QuantitySelect /> */}
                </Stack>
            }

            sx={{ width: '100%', alignItems: 'stretch', justifyContent: 'space-between', backgroundColor: theme.palette.background.paper }}>
            <ListItemText primary={`${props.name} ${props.option}`}
                secondary={<>
                    <Typography variant='body2'>
                        {props.additions.join(' + ')}
                    </Typography>
                </>} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
    </>
}

export default CartItem