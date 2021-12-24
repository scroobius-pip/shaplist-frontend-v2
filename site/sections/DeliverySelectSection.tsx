import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput } from 'components/OptionSelect';
import Section from 'components/Section';
import { ChevronRight } from '@mui/icons-material';
import CustomButton from 'components/CustomButton';
import router from 'next/dist/client/router';
import StoreContext from 'context/StoreContext'
import CartContext from 'context/CartContext'
import printCurrencyPrice from 'utils/printCurrencyPrice';
import { FulfillmentType } from 'generated/graphql';



function DeliverySelect(props: { hash: string }) {
    const { store, } = React.useContext(StoreContext)
    const { state, updateDetail } = React.useContext(CartContext)
    const deliveryOptions = store?.deliveryOptions || []
    const [option, setOption] = React.useState(deliveryOptions[0])

    const onSubmit = () => {
        updateDetail('deliveryOptionId', option.name)
        router.push(option.fulfillment === FulfillmentType.Pickup ? '#contact' : '#address')
    }
    return (
        <Section
            heading='Select a delivery option'
            headingStyle={{ component: 'h1', variant: 'h5' }}

        >
            <Stack gap={2}>
                <OptionInput
                    value={option}
                    options={deliveryOptions.map(option => ({ text: option.name, value: option, additionalText: printCurrencyPrice(store?.currency?.symbol, option.cost) }))}
                    onChange={setOption}
                />

                <CustomButton
                    onClick={onSubmit}
                    icon={<ChevronRight />}
                >
                    Continue
                </CustomButton>
            </Stack>
        </Section>

    );
}

export default DeliverySelect