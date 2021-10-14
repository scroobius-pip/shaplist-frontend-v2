import { DeleteForever, Edit } from '@mui/icons-material'
import { ListItem, ListItemText, Stack, Typography, Divider, Button, IconButton } from '@mui/material'
import React from 'react'
import theme from 'styles/theme'
import { QuantitySelect } from './QuantitySelectInput'

interface Props {
    title?: string
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
            <ListItemText primary={props?.title ?? 'Basque Burnt Cheesecake'}
                secondary={<>
                    <Typography variant='body2'>
                        Vanilla Filling + Sprinkles + Jam
                    </Typography>
                </>} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
    </>
}

export default CartItem