import React, { useContext } from 'react'
import Section from 'components/Section';
import { CustomTextField } from 'components/CustomTextField'
import { Stack } from '@mui/material'
import CustomButton from 'components/CustomButton';
import { useRouter } from 'next/dist/client/router';
import { ChevronRight } from '@mui/icons-material';
import CartContext from 'context/CartContext'
const ContactDetails = (props: { hash: string }) => {
    const router = useRouter()
    const cart = useContext(CartContext)


    return <Section
        heading='Contact Details'
        subheading="We won't spam you, it's just for fulfilling your orders."
    >
        <Stack gap={5}>

            <Stack gap={1}>
                <CustomTextField type='phone' placeholder="What's your phone number ?" />
                <CustomTextField value={cart.state.fullName} onChange={(e) => {
                    cart.updateDetail('fullName', e.target.value)
                }} placeholder="What's your full name ?" />
                <CustomTextField type='mail' placeholder="What's your email ?" />

            </Stack>
            <CustomButton
                onClick={() => router.push('#instructions')}
                icon={<ChevronRight />}
            >
                Continue
            </CustomButton>
        </Stack>
    </Section>
}

export default ContactDetails