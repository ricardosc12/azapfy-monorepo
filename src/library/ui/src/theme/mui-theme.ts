import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import './mui-config'
import {  COLORS_SYSTEM } from '@design/colors';

const theme = createTheme({
    palette:{
        mode:"light",
        primary:{
          main: COLORS_SYSTEM.laranja,
          contrastText: COLORS_SYSTEM.white
        },
        roxo:{
          main: COLORS_SYSTEM.roxo,
          contrastText:COLORS_SYSTEM.text_white,
        },
        roxinho:{
            main: COLORS_SYSTEM.roxinho,
            contrastText:COLORS_SYSTEM.roxo,
        },
        vermelho:{
          main: COLORS_SYSTEM.vermelho,
          contrastText: COLORS_SYSTEM.text_white
        },
        laranjinha: {
          main: COLORS_SYSTEM.laranjinha,
          contrastText: COLORS_SYSTEM.laranja
        },
        tonalOffset: 0.03,
        contrastThreshold: 4.5
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                  ":hover": {
                    backgroundColor: COLORS_SYSTEM.laranja_hover,
                  }
                }),
                ...(ownerState.variant === 'contained' &&
                ownerState.color === 'roxinho' && {
                  ":hover": {
                    backgroundColor: COLORS_SYSTEM.roxinho_hover,
                  }
                }),
                ...(ownerState.variant === 'contained' &&
                ownerState.color === 'vermelho' && {
                  ":hover": {
                    backgroundColor: COLORS_SYSTEM.vermelho_hover,
                  }
                }),
                ...(ownerState.variant === 'contained' &&
                ownerState.color === 'roxo' && {
                  ":hover": {
                    backgroundColor: COLORS_SYSTEM.roxo_hover,
                  }
                }),
                ...(ownerState.variant === 'contained' &&
                ownerState.color === 'laranjinha' && {
                  ":hover": {
                    backgroundColor: COLORS_SYSTEM.laranjinha_hover,
                  }
                }),
                boxShadow: 'none',
                borderRadius:'30px',
                height:'36px',
            }),
          },
        },
      },
})


export { CssBaseline, theme }