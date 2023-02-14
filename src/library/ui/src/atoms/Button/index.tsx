// import { styled } from "../../theme/stitches.config"
// import { styled } from '@mui/material/styles';
import styled from '@emotion/styled'
import { Button as ButtonMUI, ButtonProps } from "@mui/material"

// const Bt = styled('button',{
//     "&::after":{
//         content:'',
//         display:'flex',
//         width:'100px',
//         height:'100px',
//         background:'red',
//     },
//     background: '$orange',
//     fontSize: '$3'
// })

// const Bt = styled(ButtonMUI)<ButtonProps>(({})=>({
//     background:'rgb(50,20,20) !important',
//     color:'white !important'
// }))

const Bt = styled(ButtonMUI)`
    background-color: rgb(50,20,20) !important;
    color: red !important;
`

export default function Button() {
    return <Bt>
        TESTE
    </Bt>
}