import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput } from 'components/OptionSelect';
import Section from 'components/Section';
import { ChevronRight } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import router from 'next/dist/client/router';


const options = [
    {
        text: 'Katampe Extension',
        price: '+500 NGN',
        value: 'card'
    },
    {
        text: 'Gwarinpa Estate',
        price: '+200 NGN',
        value: 'bank'
    },
    {
        text: 'Maitama',
        price: '+1500 NGN',
        value: 'delivery'
    },
    {
        text: 'Pickup (free)',
        price: 'FREE',
        value: 'pickup'
    }
]



function DeliverySelect(props: { hash: string }) {
    const [option, setOption] = React.useState(options[0].value)
    return (
        <Section
            heading='Select a delivery option'
            headingStyle={{ component: 'h1', variant: 'h5' }}

        >
            <Stack gap={2}>

                <OptionInput
                    value={option}
                    options={options} onChange={setOption}
                />

                <CustomButton
                    onClick={() => router.push('#address')}
                    icon={<ChevronRight />}
                >
                    Continue
                </CustomButton>
            </Stack>
        </Section>

    );
}

export default DeliverySelect