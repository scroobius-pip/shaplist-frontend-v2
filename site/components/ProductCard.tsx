import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import theme from 'styles/theme';


interface Props {
  inCart?: boolean
  onClick?: () => any
}

export function ProductCard(props: Props) {
  return (
    <>
      <ListItem onClick={props?.onClick} disablePadding button alignItems='flex-start'>
        <ListItemAvatar sx={{
          marginRight: 1
        }}>
          <Avatar variant='rounded' alt='food1' src='/food_sample_1.jpg' sx={{
            width: 100,
            height: 100
          }} />
        </ListItemAvatar>

        <ListItemText primary='Custom Cheesecake' secondary={<>
          <Typography variant='body2'>
            Half pound beef patty, lettuce, tomato, onion, beer mustard, handcrafted Thousand Island Dressing, and side of fries.
          </Typography>
          <Typography component='h2' variant='subtitle1'>
            $35
          </Typography>
        </>} />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
}
