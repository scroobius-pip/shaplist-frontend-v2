import { ToggleButton } from '@mui/material';
import React from 'react';
import { StyledToggleButtonGroup } from './style'


interface OptionProps<T> {
  options: Array<{ text: string, value: T }>
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
      props.options.map(({ text, value }) => <ToggleButton
        key={text}
        size='large'
        value={value}>
        {text}
      </ToggleButton>)
    }
  </StyledToggleButtonGroup>

}

export default OptionInput