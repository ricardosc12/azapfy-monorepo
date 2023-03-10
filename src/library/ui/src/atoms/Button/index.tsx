import styled from "@emotion/styled";
import { Button as ButtonMui, ButtonProps } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

// const Bt = styled(ButtonMUI)`
//     &.MuiButton-root {
//         box-shadow: none;
//         border-radius: 30px;
//     }
// `

interface ButtonPropsAzp extends ButtonProps {
    toltip: String;
}

export default function Button({
    children,
    toltip = String(children||""),
    ...props
}: ButtonPropsAzp) {
    return (
        <Tooltip title={toltip}>
            <ButtonMui
                disableElevation
                color="primary"
                variant="contained"
                {...props}
            >
                {children}
            </ButtonMui>
        </Tooltip>
    );
}
