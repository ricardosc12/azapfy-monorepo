import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        neutral?: Palette["primary"];
        roxinho?: Palette["primary"];
        vermelho?: Palette["primary"];
        vermelinho?: Palette["primary"];
        roxo?: Palette["primary"];
        laranjinha?: Palette["primary"];
        cinza?: Palette["primary"];
        cinzinha?: Palette["primary"];
    }
    interface PaletteColor {
        neutral?: PaletteColor["main"];
        roxinho?: PaletteColor["main"];
        vermelho?: PaletteColor["main"];
        vermelinho?: PaletteColor["main"];
        roxo?: PaletteColor["main"];
        laranjinha?: PaletteColor["main"];
        cinza?: PaletteColor["main"];
        cinzinha?: PaletteColor["main"];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions["primary"];
        roxinho?: PaletteOptions["primary"];
        vermelho?: PaletteOptions["primary"];
        vermelinho?: PaletteOptions["primary"];
        roxo?: PaletteOptions["primary"];
        laranjinha?: PaletteOptions["primary"];
        cinza?: PaletteOptions["primary"];
        cinzinha?: PaletteOptions["primary"];
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true;
        roxinho: true;
        vermelho: true;
        vermelinho: true;
        roxo: true;
        laranjinha: true;
        cinza: true;
        cinzinha: true;
    }
    interface ButtonPropsVariantOverrides {
        action: true;
    }
}

declare module "@mui/material/Fab" {
    interface FabPropsColorOverrides {
        neutral: true;
        roxinho: true;
        vermelho: true;
        vermelinho: true;
        roxo: true;
        laranjinha: true;
        cinza: true;
        cinzinha: true;
    }
}

declare module "@mui/material/Checkbox" {
    interface CheckboxPropsColorOverrides {
        neutral: true;
        roxinho: true;
        vermelho: true;
        vermelinho: true;
        roxo: true;
        laranjinha: true;
        cinza: true;
        cinzinha: true;
    }
}
