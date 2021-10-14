import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    shape: {
        borderRadius: 5
    },
    palette: {
        background: {
            paper: '#FFFF',
            default: '#F5F5F5'
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },

});

export default theme;