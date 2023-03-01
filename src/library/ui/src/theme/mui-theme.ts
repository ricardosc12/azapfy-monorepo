import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import "./mui-config";
import { COLORS_SYSTEM } from "@design/colors";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: COLORS_SYSTEM.laranja,
            contrastText: COLORS_SYSTEM.white,
        },
        roxo: {
            main: COLORS_SYSTEM.roxo,
            contrastText: COLORS_SYSTEM.text_white,
        },
        roxinho: {
            main: COLORS_SYSTEM.roxinho,
            contrastText: COLORS_SYSTEM.roxo,
        },
        vermelho: {
            main: COLORS_SYSTEM.vermelho,
            contrastText: COLORS_SYSTEM.text_white,
        },
        vermelinho: {
            main: COLORS_SYSTEM.vermelinho,
            contrastText: COLORS_SYSTEM.vermelho,
        },
        laranjinha: {
            main: COLORS_SYSTEM.laranjinha,
            contrastText: COLORS_SYSTEM.laranja,
        },
        cinza: {
            main: COLORS_SYSTEM.cinza,
            contrastText: COLORS_SYSTEM.white,
        },
        cinzinha: {
            main: COLORS_SYSTEM.cinzinha,
            contrastText: COLORS_SYSTEM.cinza,
        },
        tonalOffset: 0.03,
        contrastThreshold: 4.5,
    },
    components: {
        MuiTooltip:{
            styleOverrides:{
                tooltip:{
                    padding:"4px 10px",
                }
            }
        },
        MuiFab:{
            styleOverrides:{
                sizeMedium:{
                    minWidth:'30px',
                    minHeight:'30px',
                    width:'30px',
                    height:'30px',
                    "& > svg": {
                        fontSize:'14px'
                    }
                },
                // @ts-expect-error
                sizeLarge:{
                    minWidth:'36px',
                    minHeight:'36px',
                    width:'36px',
                    height:'36px',
                    "& > svg": {
                        fontSize:'18px'
                    }  
                },
                sizeSmall:{
                    minWidth:'22px',
                    minHeight:'22px',
                    width:'22px',
                    height:'22px',
                    "& > svg": {
                        fontSize:'10px'
                    }
                },
                root:({ownerState}) => ({
                    boxShadow:'none !important',
                    ...(ownerState.color === "primary" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.laranja_hover,
                            },
                        }),
                    ...(ownerState.color === "roxinho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.roxinho_hover,
                            },
                        }),
                    ...(ownerState.color === "vermelho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.vermelho_hover,
                            },
                        }),
                        ...(ownerState.color === "vermelinho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.vermelinho_hover,
                            },
                        }),
                    ...(ownerState.color === "roxo" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.roxo_hover,
                            },
                        }),
                    ...(ownerState.color === "laranjinha" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.laranjinha_hover,
                            },
                        }),
                        ...(ownerState.color === "cinza" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.cinza_hover,
                            },
                        }),
                        ...(ownerState.color === "cinzinha" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.cinzinha_hover,
                            },
                        }),
                }),
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({

                    boxShadow: "none",
                    borderRadius: "30px",
                    letterSpacing:'1.1px',
                    fontWeight:500,
                    fontSize: 12,
                    paddingLeft:'18px',
                    paddingRight:'16px',

                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "primary" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.laranja_hover,
                            },
                        }),
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "roxinho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.roxinho_hover,
                            },
                        }),
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "vermelho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.vermelho_hover,
                            },
                        }),
                        ...(ownerState.variant === "contained" &&
                        ownerState.color === "vermelinho" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.vermelinho_hover,
                            },
                        }),
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "roxo" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.roxo_hover,
                            },
                        }),
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "laranjinha" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.laranjinha_hover,
                            },
                        }),
                        ...(ownerState.variant === "contained" &&
                        ownerState.color === "cinza" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.cinza_hover,
                            },
                        }),
                        ...(ownerState.variant === "contained" &&
                        ownerState.color === "cinzinha" && {
                            ":hover": {
                                backgroundColor: COLORS_SYSTEM.cinzinha_hover,
                            },
                        }),
                }),
                sizeMedium:{
                    height: "30px",
                    paddingBottom: "5px",
                },
                sizeSmall:{
                    transform:'scale(0.75)',
                    paddingBottom:'3px'
                },
                sizeLarge:{
                    height:'36px',
                    fontSize:16,
                    paddingBottom: "7px",
                },
                iconSizeSmall:{
                    "& > *:first-child": {
                        margin:'0px 1px 2px 0px',
                        fontSize: '14px'
                    }
                },
                iconSizeMedium:{
                    "& > *:first-child": {
                        marginRight:'1px',
                        marginBottom:"0.01rem",
                        fontSize: '14px'
                    }
                },
                iconSizeLarge:{
                    "& > *:first-child": {
                        marginRight:'3px',
                        marginBottom:"0.01rem",
                        fontSize: '18px'
                    }
                }
            },
        },
    },
});

export { CssBaseline, theme };
