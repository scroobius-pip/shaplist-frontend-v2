import { ToggleButton } from '@mui/material'
import React from 'react'
import { StyledToggleButtonGroup } from './style'

interface SelectProps<T> {
    options: Array<{ text: string, value: T }>
    value: T[]
    onChange: (value: T[]) => any
}

function OptionInput<T>(props: SelectProps<T>) {

    return <StyledToggleButtonGroup
        value={props.value}
        orientation='vertical'
        onChange={(_, value) => props.onChange(value)}
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