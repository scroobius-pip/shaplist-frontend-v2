import { Box, IconButton } from '@mui/material';
import React from 'react';
import { Remove, Add } from '@mui/icons-material';
import { CustomTextField } from './CustomTextField';
import theme from 'styles/theme';

export function QuantitySelect() {
  const [quantity, setQuantity] = React.useState(1)
  return (<Box sx={{
    backgroundColor: theme.palette.background.paper,
    // borderTopLeftRadius:
  }} width='100%' display='flex'>
    <IconButton onClick={() => quantity > 1 && setQuantity(quantity - 1)} size='large'>
      <Remove />
    </IconButton>
    <CustomTextField
      sx={{ fontSize: 18 }}
      value={quantity}
      onChange={({ target: { value } }) => setQuantity(+value > 0 ? +value : 1)}
      type='number' />
    <IconButton
      onClick={() => setQuantity(quantity + 1)}
      size='large'>
      <Add />
    </IconButton>

  </Box>);
}
