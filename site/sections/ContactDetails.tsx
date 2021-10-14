import React from 'react'
import Section from 'components/Section';
import { CustomTextField } from 'components/CustomTextField'
import { Stack } from '@mui/material'
import CustomButton from 'components/CustomButton';
import { useRouter } from 'next/dist/client/router';
import { ChevronRight } from '@mui/icons-material';

const ContactDetails = (props: { hash: string }) => {
    const router = useRouter()

    return <Section
        heading='Contact Details'
        subheading="We won't spam you, it's just for fulfilling your orders."
    >
        <Stack gap={5}>

            <Stack gap={1}>
                <CustomTextField type='phone' placeholder="What's your phone number ?" />
                <CustomTextField placeholder="What's your full name ?" />
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