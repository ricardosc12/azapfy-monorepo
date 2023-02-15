import styled from '@emotion/styled'
import { Button as ButtonMui, ButtonProps } from "@mui/material"
import { Checkbox } from '@mui/material'

// const Bt = styled(ButtonMUI)`
//     &.MuiButton-root {
//         box-shadow: none;
//         border-radius: 30px;
//     }
// `

export default function Button({children,...props}:ButtonProps) {

    return (
        <ButtonMui disableElevation color="primary" variant="contained" {...props}>
            {children}
        </ButtonMui>
    )
}   