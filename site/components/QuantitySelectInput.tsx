import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Remove, Add } from '@mui/icons-material';
import { CustomTextField } from './CustomTextField';
import theme from 'styles/theme';

interface Props {
  value: number
  onChange: (value: number) => any

}

export function QuantitySelect(props: Props) {
  return (<Box sx={{
    // backgroundColor: theme.palette.background.paper
  }} width='100%' display='flex'>
    <IconButton onClick={() => props.value > 1 && props.onChange(props.value - 1)} size={'large'}>
      <Remove />
    </IconButton>
    <CustomTextField
      sx={{ textAlign: 'center' }}
      value={props.value}
      onChange={({ target: { value } }) => props.onChange(+value > 0 ? +value : 1)}
      type='number' />
    <IconButton
      onClick={() => props.onChange(props.value + 1)}
      size={'large'}>
      <Add />
    </IconButton>
  </Box>);
}

export function CartItemQuantitySelect(props: Props) {
  return <Box display='flex' borderRadius={theme.shape.borderRadius} sx={{ backgroundColor: theme.palette.primary.main }} justifyContent='center' alignItems='center'>
    <IconButton onClick={() => props.value > 1 && props.onChange(props.value - 1)} >
      <Remove sx={{ color: theme.palette.primary.contrastText }} />
    </IconButton>
    <Typography variant='subtitle1' color={theme.palette.primary.contrastText}> {props.value}</Typography>
    <IconButton
      onClick={() => props.onChange(props.value + 1)}
    >
      <Add sx={{ color: theme.palette.primary.contrastText }} />
    </IconButton>
  </Box>

}