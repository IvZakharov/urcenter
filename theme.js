import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#F9F8FD',
      main: '#5A37BD',
    },
    secondary: {
      main: '#03BAFF',
    },
  },
  typography: {
    fontFamily: `'Brutal Type', 'Helvetica',  'sans-serif'`,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontFamily: `'Brutal Type', 'Helvetica',  'sans-serif'`,
          textTransform: 'none',
          padding: '10px 30px',
          fontWeight: 500,
          paddingX: 30,
          fontSize: 16,
        },
        sizeSmall: {
          fontSize: 14,
        },
        sizeMedium: {
          fontSize: 16,
        },
        sizeLarge: {
          fontSize: 20,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1200,
      xl: 1400,
    },
  },
});
