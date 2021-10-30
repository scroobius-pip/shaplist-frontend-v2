import { Box, IconButton } from '@mui/material';
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
    backgroundColor: theme.palette.background.paper
  }} width='100%' display='flex'>
    <IconButton onClick={() => props.value > 1 && props.onChange(props.value - 1)} size='large'>
      <Remove />
    </IconButton>
    <CustomTextField
      sx={{ fontSize: 18 }}
      value={props.value}
      onChange={({ target: { value } }) => props.onChange(+value > 0 ? +value : 1)}
      type='number' />
    <IconButton
      onClick={() => props.onChange(props.value + 1)}
      size='large'>
      <Add />
    </IconButton>
  </Box>);
}
