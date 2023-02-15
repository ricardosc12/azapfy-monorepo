import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import './mui-config'
import { COLORS } from '@design/colors';


const theme = createTheme({
    palette:{
        mode:"light",
        ...COLORS,
        tonalOffset: 0.03,
        contrastThreshold: 4.5
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                  backgroundColor: '#FF7418',
                  color: '#fff',
                  ":hover": {
                    backgroundColor: '#FF944D',
                  }
                }),
            }),
          },
        },
      },
})


export { CssBaseline, theme }