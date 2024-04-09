import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6ee1bd',
        },
        secondary: {
            main: '#019df4',
        },
        info: {
            main: '#f5f5f5',
        },
        action: {
            active: '#004254',
        },

        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        subtitle1: {
            fontSize: '36px',
            color: '#019df4',
            fontWeight: '500',
        },
    },
})
