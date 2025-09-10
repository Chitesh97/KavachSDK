import { createTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';

/**
 * Since makeStyles is now exported from @mui/styles package which does not know about Theme in the core package.
 * you need to augment the DefaultTheme (empty object) in @mui/styles with Theme from the core.
 */
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme { }
}

// eslint-disable-next-line import/prefer-default-export
export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    }
  }
});
