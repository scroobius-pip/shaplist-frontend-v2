import { Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput } from 'components/OptionSelect';
import Section from '../components/Section';
import CustomButton from 'components/CustomButton';
import { ChevronRight } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useRouter } from 'next/dist/client/router';
import CartContext from 'context/CartContext';


const options = [
  {
    text: 'Credit/Debit Card',
    value: 'card'
  },
  {
    text: 'Bank Transfer',
    value: 'bank'
  },
  {
    text: 'Pay on Delivery',
    value: 'delivery'
  }
]


function PaymentSelect(props: { hash: string }) {

  const router = useRouter()
  const { updateDetail, state } = React.useContext(CartContext)

  return (<Section
    heading='How would you like to pay ?'
    headingStyle={{ component: 'h1', variant: 'h5' }}
  >
    <Stack gap={2}>

      <OptionInput
        value={state.deliveryOptionId}
        options={options} onChange={(option) => updateDetail('deliveryOptionId', option)}
      />

      <CustomButton
        onClick={() => router.push('#delivery')}
        icon={<ChevronRight />}
      >
        Continue
      </CustomButton>
    </Stack>

  </Section>);
}

export default PaymentSelect