import { styled, OutlinedInput, OutlinedInputProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(OutlinedInput)(({ theme, multiline, sx }) => ({
  width: '100%',
  textAlign: 'left',
  backgroundColor: theme.palette.background.paper,
  '& .MuiOutlinedInput-input': {
    textAlign: (sx as any)?.textAlign ?? 'left',
    // textAlign: multiline ? 'left' : 'center',
    minHeight: multiline ? 100 : 'initial',
    fontWeight: 'bold',
    borderRadius: theme.shape.borderRadius,

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
