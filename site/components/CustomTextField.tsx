import { styled, OutlinedInput, OutlinedInputProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(OutlinedInput)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-input': {
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    fontWeight: 600,
    padding: '16.5px 14px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },

}))


interface Props extends OutlinedInputProps {

}

export function CustomTextField(props: Props) {
  return <StyledTextField {...props} />
}
