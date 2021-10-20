import { ChevronRight } from '@mui/icons-material'
import { Stack } from '@mui/material'
import CartButton from 'components/CartButton'
import CustomButton from 'components/CustomButton'
import { CustomTextField } from 'components/CustomTextField'
import Section from 'components/Section'
import router from 'next/dist/client/router'
import React from 'react'

interface Props {
    hash: string
}
const Instructions = (props: Props) => {
    
    return <Section
        heading='Additional Instructions'
        headingStyle={{ component: 'h1', variant: 'h5' }}
    >
        <Stack>
            <CustomTextField
                multiline
                placeholder={`Do you have any comments or delivery instructions ? type them here`}
            />
            <CartButton text='Pay' onClick={() => { }} />
        </Stack>
    </Section>
}

export default Instructions