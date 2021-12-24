import { DeleteForever, Edit } from '@mui/icons-material'
import { ListItem, ListItemText, Stack, Typography, Divider, Button, IconButton, Box } from '@mui/material'
import React from 'react'
import theme from 'styles/theme'
import { DProduct } from 'types/types'
import { CartItemQuantitySelect, QuantitySelect } from './QuantitySelectInput'

interface Props {
    name: string
    option: string
    additions: string[]
    price: string
    quantity: number
    onQuantityChange: (quantity: number) => any
    onRemove: () => any
}

const CartItem = (props: Props) => {
    return <Box sx={{ backgroundColor: theme.palette.background.paper }}>

        <ListItem
            // onClick={props?.onClick}

            secondaryAction={
                <Stack textAlign='right'>
                    <Typography variant='subtitle1'>{props.price}</Typography>

                </Stack>
            }

            sx={{
                width: '100%',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                // backgroundColor: theme.palette.background.paper
            }}>
            <ListItemText primary={`${props.name} ${props.option}`}
                secondary={<>
                    <Typography variant='body2'>
                        {props.additions.join(' + ')}
                    </Typography>
                </>} />
        </ListItem>
        <Box sx={{
            // backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end'
        }}
            width='100%'
            paddingX={1}>
            <CartItemQuantitySelect
                onChange={props.onQuantityChange}
                value={props.quantity}

            />
            <Button onClick={props.onRemove} color='warning' variant="text">Delete</Button>

        </Box>
        <Divider variant="fullWidth" component="li" />
    </Box>
}


export default CartItem