import styled from '@emotion/styled'
import { Button as ButtonMUI } from "@mui/material"

const Bt = styled(ButtonMUI)`
    /* background-color: blue; */
    /* color: white; */
`

export default function Button() {
    return <Bt variant='contained'>
        CONFIRMAR
    </Bt>
}