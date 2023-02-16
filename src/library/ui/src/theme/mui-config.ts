import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        neutral?: Palette['primary'];
        roxinho?: Palette['primary'];
        vermelho?: Palette['primary'];
        roxo?: Palette['primary'];
        
    }
    interface PaletteColor {
        neutral?: PaletteColor['main'];
        roxinho?: PaletteColor['main'];
        vermelho?: PaletteColor['main'];
        roxo?: PaletteColor['main'];
        
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        roxinho?: PaletteOptions['primary'];
        vermelho?: PaletteOptions['primary'];
        roxo?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
        roxinho: true;
        vermelho: true;
        roxo: true;
    }
}
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        neutral: true;  
        roxinho: true;
        vermelho: true;
        roxo: true;
    }
}