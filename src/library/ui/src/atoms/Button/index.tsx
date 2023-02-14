import { styled } from "../../theme/stitches.config"

const Bt = styled('button',{
    "&::after":{
        content:'',
        display:'flex',
        width:'100px',
        height:'100px',
        background:'red',
    },
    background: '$orange',
    fontSize: '$3'
})

export default function Button() {
    return <Bt>
        <div></div>
    </Bt>
}