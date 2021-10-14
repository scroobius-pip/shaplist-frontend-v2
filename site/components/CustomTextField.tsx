import { styled, OutlinedInput, OutlinedInputProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(OutlinedInput)(({ theme, multiline }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  '& .MuiOutlinedInput-input': {
    textAlign: multiline ? 'left' : 'center',
    minHeight: multiline ? 100 : 'initial',

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
