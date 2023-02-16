import styled from "@emotion/styled"
import { IconButton } from "@mui/material"

const IconWrapper = styled(IconButton)`
    & > svg {
        font-size: 20px;
        color: ${props=>props.iconColor?props.iconColor:'var(--text_comum)'};
    }
`

export { IconWrapper }