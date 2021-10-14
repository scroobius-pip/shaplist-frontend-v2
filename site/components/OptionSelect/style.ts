import { ToggleButtonGroup, styled } from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    width: '100%',

    '& .MuiToggleButtonGroup-grouped': {
        boxShadow: theme.shadows[1],
        fontWeight: 600,
        margin: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        padding: '16.5px 14px',
        border: `solid 1.6px transparent !important`,
        borderTop: 1.6,
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
            backgroundColor: theme.palette.background.paper
        },
        '&:not(:last-of-type), &:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
            borderTop: '1.6px'
        },
        '&.Mui-selected': {
            backgroundColor: theme.palette.background.paper,
            border: `solid 1.6px ${theme.palette.primary.main} !important`
        }
    },
}));

