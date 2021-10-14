import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput } from 'components/OptionSelect';
import Section from 'components/Section';
import { ChevronRight } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import router from 'next/dist/client/router';


const options = [
    {
        text: 'Katampe Extension ($2)',
        value: 'card'
    },
    {
        text: 'Gwarinpa Estate ($1)',
        value: 'bank'
    },
    {
        text: 'Maitama ($0.5)',
        value: 'delivery'
    },
    {
        text: 'Pickup (free)',
        value: 'pickup'
    }
]
function DeliverySelect() {
    const [option, setOption] = React.useState(options[0].value)
    return (
        <Section
            heading='Select a delivery option'
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