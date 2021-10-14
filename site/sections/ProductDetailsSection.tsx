import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { OptionInput, SelectInput } from 'components/OptionSelect';
import { QuantitySelect } from 'components/QuantitySelectInput';
import Section from '../components/Section';
import { useRouter } from 'next/dist/client/router';
import FloatButton from 'components/FloatButton';
import CustomButton from 'components/CustomButton';
const options = [{
  text: 'Vanilla Filling $40',
  value: 'vanilla'
}, {
  text: 'Strawberry Filling $10',
  value: 'strawberry'
}]

const additions = [{
  value: 'sprinkles',
  text: 'Sprinkles (+$2)'
}, {
  text: 'Jam (+$5)',
  value: 'jam'
}, {
  text: 'Nutella Spread (+$15)',
  value: 'nutella'

}]


function ProductDetails(props: { hash: string }) {
  const [option, setOption] = React.useState(options[0].value)
  const [addition, setAddition] = React.useState([additions[0].value])
  const router = useRouter()

  return (<Stack gap={4} >
    <Box>
      <img style={{
        aspectRatio: '1/1',
        objectFit: 'cover',
        borderRadius: 10
      }} alt={'food sample'} width='100%' src={'/food_sample_1.jpg'} />

      <Typography gutterBottom variant='h5' textAlign='center' component='h1'>
        Basque Burnt Cheesecake
      </Typography>
      <Typography gutterBottom variant='body1' textAlign='center'>
        Cheese Cake description
      </Typography>
    </Box>
    <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Select an option'>
      <OptionInput value={option} options={options} onChange={setOption} />
    </Section>
    <Section headingStyle={{ variant: 'h6', component: 'h2' }} heading='Additions'>
      <SelectInput value={addition} options={additions} onChange={setAddition} />
    </Section>
    <FloatButton>

      <Card variant='elevation' elevation={12} sx={{ padding: 1 }}>
        <QuantitySelect />
        <CustomButton onClick={() => router.push('#catalog')} >Add to Cart</CustomButton>

      </Card>
    </FloatButton>
  </Stack>);
}

export default ProductDetails