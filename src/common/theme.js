import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const colors = {
  blue: {
    light: '#88C9DE',
    dark: '#0a1f29'
  },
  gray: {
    light: '#a4aaae',
    dark: '#565E64'
  },
  white: {
    main: '#ffffff',
    light: '#fffff2'
  },
  black: {
    main: '#000000'
  }
};

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: colors.white.light,
      light: colors.blue.light,
      dark: colors.blue.dark
    },
    secondary: {
      main: colors.gray.light,
      light: colors.gray.dark
    },
    background: {
      default: colors.white.main
    }
  },
  // use this approach for any spacing (padding,gap,width,height,) when you want to use rem(px) as measurment
  // spacing(1) means 0.5 rem = 8px
  spacing: (factor) => `${0.5 * factor}rem`,
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          lineHeight: 2,
          borderWidth: 4
        },
        textPrimary: {
          color: colors.blue.dark
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15
        }
      }
    }
  }
};
// https://material-ui.com/customization/default-theme/#default-theme
const theme = createTheme(themeOptions);
const materialTheme = responsiveFontSizes(theme);
export default materialTheme;
