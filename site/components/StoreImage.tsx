import FacebookRounded from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box';
import Link from '@mui/material/Link'
import React from 'react'
import theme from 'styles/theme';


export default function StoreImage({ url }: { url: string }) {
    return <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '25vh',
            borderTopRightRadius: theme.shape.borderRadius,
            borderTopLeftRadius: theme.shape.borderRadius,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(0,0,0,0.7)), url('${url}')`
        }}

    >
        <Box
            sx={{
                color: 'background.paper',
                position: 'absolute',
                bottom: 0,
                padding: 2,
                // left: '25%'
            }}
        >
            <Typography fontWeight='bold' variant='h6' component='h1'>
                Shap Cafe
            </Typography>
            <Stack direction='row' spacing={1}>
                <Link color='inherit' href='#'>
                    <FacebookRounded />
                </Link>
                <Link color='inherit' href='#'>
                    <TwitterIcon />
                </Link>
                <Link color='inherit' href='#'>
                    <InstagramIcon />
                </Link>
            </Stack>
        </Box>

    </Box>

}
