import { Box } from '@mui/system'
import React from 'react'

const FloatButton = ({ children }: any) => {

    return <Box

        sx={{
            zIndex: 20,
            marginTop: 5,
            position: 'sticky',
            width: '100%',
            bottom: 10
        }}
    >
        {children}
    </Box>
}

export default FloatButton