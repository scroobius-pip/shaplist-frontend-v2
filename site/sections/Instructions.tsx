import { ChevronRight } from '@mui/icons-material'
import { Stack } from '@mui/material'
import CartButton from 'components/CartButton'
import CustomButton from 'components/CustomButton'
import { CustomTextField } from 'components/CustomTextField'
import Section from 'components/Section'
import router from 'next/dist/client/router'
import CartContext from 'context/CartContext'
import React from 'react'
interface Props {
    hash: string
}

const Instructions = (props: Props) => {
    const { state, updateDetail } = React.useContext(CartContext)
    return <Section
        heading='Additional Instructions'
        headingStyle={{ component: 'h1', variant: 'h5' }}
    >
        <Stack gap={5}>
            <CustomTextField
                value={state.instructions}
                onChange={e => updateDetail('instructions', e.target.value)}
                multiline
                placeholder={`Do you have any comments or delivery instructions ? type them here`}
            />
            <CartButton text='Pay' onClick={() => window.alert(JSON.stringify(state))} />
        </Stack>
    </Section>
}

export default Instructions