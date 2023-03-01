import styled from "@emotion/styled";
import { Fab, FabProps } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// const Bt = styled(ButtonMUI)`
//     &.MuiButton-root {
//         box-shadow: none;
//         border-radius: 30px;
//     }
// `

interface FabPropsAzp extends FabProps {
    toltip?: String;
}

export default function ActionButton({
    children,
    toltip = "",
    ...props
}: FabPropsAzp) {
    return (
        <Tooltip title={toltip}>
            <Fab
                variant="circular"
                color="primary"
                size="medium"
                {...props}
            >   
                {children}
            </Fab>
        </Tooltip>
    );
}
