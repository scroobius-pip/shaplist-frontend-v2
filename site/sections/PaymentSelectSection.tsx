import { Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput } from 'components/OptionSelect';
import Section from '../components/Section';
import CustomButton from 'components/CustomButton';
import { ChevronRight } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useRouter } from 'next/dist/client/router';


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
  const [option, setOption] = React.useState(options[0].value)
  const router = useRouter()
  return (<Section
    heading='How would you like to pay ?'
  >
    <Stack gap={2}>

      <OptionInput
        value={option}
        options={options} onChange={setOption}
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