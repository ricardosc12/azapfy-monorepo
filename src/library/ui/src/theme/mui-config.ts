import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        neutral?: Palette['primary'];
        roxinho?: Palette['primary'];
    }
    interface PaletteColor {
        neutral?: PaletteColor['main'];
        roxinho?: PaletteColor['main'];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        roxinho?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
        roxinho: true;
    }
}
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        neutral: true;  
        roxinho: true;
    }
}