import styled from '@emotion/styled'
import { Button as ButtonMUI } from "@mui/material"
import { Checkbox } from '@mui/material'

const Bt = styled(ButtonMUI)`
    /* background-color: blue; */
    &.MuiButton-root {
        box-shadow: none;
        border-radius: 30px;
    }
    /* color: white; */
`

export default function Button() {

    return (
        <>
            <Bt color="primary" variant="contained">
                CONFIRMAR
            </Bt>
            <Checkbox color="neutral" defaultChecked/>
        </>

    )
}   