import { Button } from '@mui/material'

interface Props {
    disabled?: boolean
    children: React.ReactElement | React.ReactElement[] | string
    onClick?: () => any
    icon?: React.ReactElement
}

const CustomButton = (props: Props) => {

    return <Button
        disabled={props.disabled}
        onClick={props?.onClick}
        variant='contained'
        fullWidth
        endIcon={props?.icon}
        sx={{
            padding: '16.5px 14px',
        }}
    >
        {props.children}
    </Button>
}

export default CustomButton