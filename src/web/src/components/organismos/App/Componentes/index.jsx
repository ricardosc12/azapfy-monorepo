import styled from '@emotion/styled'
import Button from '@ui/atoms/Button'

const Main = styled.div`
    display: flex;
    padding: 5px;
    margin: 5px;
    justify-content: center;
    align-items: center;
`

export default function Componentes(){
    return (
        <Main>
            <Button color="roxinho">ROXINHO</Button>
            <Button>LARANJA</Button>
        </Main>
    )
}