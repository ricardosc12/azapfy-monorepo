import styled from "@emotion/styled"
import Select from "@ui/atoms/Select"

const Main=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: var(--white);
`

export default function SelectPage(){
    return (
        <Main>
            <Select/>
        </Main>
    )
}
    