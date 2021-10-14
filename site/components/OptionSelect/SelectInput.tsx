import { ToggleButton, Box, Stack } from '@mui/material'
import React from 'react'
import { StyledToggleButtonGroup } from './style'

interface SelectProps<T> {
    options: Array<{ text: string, value: T, additionalText?: string }>
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
            props.options.map(({ text, value, additionalText }) => <ToggleButton
                key={text}
                size='large'
                value={value}>
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