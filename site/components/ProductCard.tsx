import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Currency } from 'generated/graphql';
import React from 'react';
import theme from 'styles/theme';
import { DProduct } from 'types/types';
import printCurrencyPrice from 'utils/printCurrencyPrice';


interface Props {
  inCart?: boolean
  onClick?: () => any
  product: DProduct
  currency: Currency
}

export function ProductCard(props: Props) {
  return (
    <>
      <ListItem sx={{
        marginBottom: 1,
        padding: 1,
        backgroundColor: theme.palette.background.paper,
        border: 'solid 1px',
        borderColor: theme.palette.divider,
        borderRadius: 1
      }} onClick={props?.onClick} disablePadding button alignItems='flex-start'>
        {!!props.product?.imageUrl?.length && <ListItemAvatar sx={{
          marginRight: 1
        }}>
          <Avatar variant='rounded' alt={props.product.name} src={props.product?.imageUrl[0].preview} sx={{
            width: 100,
            height: 100
          }} />
        </ListItemAvatar>
        }

        <ListItemText primary={props.product.name} secondary={<>
          <Typography variant='body2'>
            {props.product?.description}
          </Typography>
          {!!props.product?.price && <Typography component='h2' variant='subtitle1'>
            {printCurrencyPrice(props.currency.symbol, props.product?.price.value)}
          </Typography>
          }
        </>} />
      </ListItem>
      {/* <Divider variant="middle" component="li" /> */}
    </>
  );
}
