import { Stack } from '@mui/material'
import { CustomTextField } from 'components/CustomTextField'
import Section from 'components/Section'
import CustomButton from 'components/CustomButton'
import React from 'react'
import { ChevronRight } from '@mui/icons-material';
import { useRouter } from 'next/dist/client/router';

const DeliveryAddress = (props: { hash: string }) => {
    const router = useRouter()

    return <Section
        heading='What’s the delivery address ?'
        subheading='You can leave it empty if your delivery method doesn’t need an address'

    >
        <Stack gap={10}>

            <CustomTextField
                placeholder='Street No, house No, nearest landmarks'
            />
            <CustomButton
                onClick={() => router.push('#contact')}
                icon={<ChevronRight />}
            >
                Continue
            </CustomButton>
        </Stack>
    </Section>
}

export default DeliveryAddress