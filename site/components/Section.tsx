import { Stack, Typography } from '@mui/material'
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


const Section = ({ children, heading, subheading, headingStyle = { component: 'h2', variant: 'h5' } }: Props) => {
    // const { variant, component } = headingStyle
    return <Stack width='100%' height='100%' display='flex' justifyContent='center'>
        <Typography width='100%' textAlign='center' component={headingStyle.component as any} variant={headingStyle.variant as any}>
            {heading}
        </Typography>
        <Typography width='100%' gutterBottom textAlign='center'>
            {subheading}
        </Typography>
        {children}
    </Stack>
}

export default Section