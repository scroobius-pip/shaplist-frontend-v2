import { Box, Stack, ToggleButton, Typography } from '@mui/material';
import React from 'react';
import { StyledToggleButtonGroup } from './style'


interface OptionProps<T> {
  options: Array<{ text: string, value: T, additionalText?: string }>
  value: T,
  onChange: (value: T) => any
}

function OptionInput<T>(props: OptionProps<T>) {

  return <StyledToggleButtonGroup
    value={props.value}
    onChange={(_, value) => value && props.onChange(value)}
    exclusive
    orientation='vertical'
    color='primary'
    aria-label=' select'
  >
    {
      props.options.map(({ text, value, additionalText }) => <ToggleButton
        key={text}
        size='large'
        value={value}

      >
        <Stack justifyContent='space-between' width='100%' direction='row' >
          <Box>
            {text}
          </Box>
          <Box>
            {additionalText}
          </Box>
        </Stack>
      </ToggleButton>)
    }
  </StyledToggleButtonGroup>

}

export default OptionInput