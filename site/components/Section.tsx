import { Stack, Typography, Box } from '@mui/material'
import React from 'react'

interface Props {
    heading: string
    subheading?: string
    children: JSX.Element
    headingStyle?: {
        variant: string,
        component: string
    }
}


const Section = ({ children, heading, subheading, headingStyle = { component: 'h1', variant: 'h5' } }: Props) => {
    // const { variant, component } = headingStyle
    return <Stack width='100%' height='100%' display='flex' justifyContent='center'>
        <Box marginBottom={4}>
            <Typography width='100%' fontWeight='600' textAlign='left' component={headingStyle.component as any} variant={headingStyle.variant as any}>
                {heading}
            </Typography>
            {subheading && <Typography width='100%' textAlign='left'>
                {subheading}
            </Typography>}

        </Box>
        {children}
    </Stack>
}

export default Section