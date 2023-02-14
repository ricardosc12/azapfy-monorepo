import styled from '@emotion/styled'
import useModalKeep from "./components/modais/keepmounted"
import useModalDelete from "./components/modais/padrao"
import useModalWithoutAsync from "./components/modais/withoutasync"
import useModalProps from "./components/modais/withprops"
import useModalPropsOpen from "./components/modais/withpropsonopen"
import Button from "@ui/atoms/Button"
import { useState } from 'react'

const Main = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${props=>props.back?'rgba(10,0,0,.1)':'rgba(0,100,0,.5)'};
    height:300px;
    /* & button {
        background-color:rgba(150,150,20,.5);
        margin:5px;
        padding:5px 12px;
        border-radius:5px;
    } */
`

export default function Modal(){

    const [state, setState] = useState(false)

    const modalDelete = useModalDelete()

    const modalProps = useModalPropsOpen()

    const modalPropsDefault = useModalProps({props:'teste'})

    const modalWithoutAsync = useModalWithoutAsync()

    const modalKeep = useModalKeep({keepMounted:true})

    const handleDelete = async () => {
        const data = await modalDelete.current.openPromise()
        console.log(data)
    }

    const handleOnOpen = async () =>{
        const data = await modalProps.current.openPromise({dados:'teste'})
        console.log(data)
    }

    const handleOpen=async()=>{
        const data = await modalPropsDefault.current.openPromise()
        console.log(data)
    }

    function handleSubmit(close){
        console.log("FEITO")
        close()
    }
    const handleOpenSync=()=>{
        modalWithoutAsync.current.open({handleSubmit:handleSubmit})
    }

    const handleKeep=()=>{
        modalKeep.current.open()
    }

    return (
        <Main back={state}>
            <div onClick={()=>setState(!state)}>MODAIS</div>
            <button onClick={handleDelete}>PADRÃO</button>
            <button onClick={handleOpen}>WITH PROPS</button>
            <button onClick={handleOnOpen}>WITH PROPS ON OPEN</button>
            <button onClick={handleOpenSync}>WITHOUT OPEN ASYNC</button>
            <button onClick={handleKeep}>KEEP MOUNTED</button>
            <Button/>
        </Main>
    )
}