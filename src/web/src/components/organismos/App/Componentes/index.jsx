import styled from '@emotion/styled'
import Button from '@ui/atoms/Button'
import { useState } from 'react'
import style from './style.module.css'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 5px;
    justify-content: space-around;
    align-items: center;
    background-color: ${props=>props.active};
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 100px;
        margin: 20px;
        border-radius: 20px;
    }
`

const CustomDiv = styled.div`
    cursor: pointer;
    background-color: var(--azul);
    color: white;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1) !important;
    &:hover {
        background-color: #5799db;
    }
    font-weight: bold;
`

export default function Componentes(){

    const [active, setActive] = useState('var(--laranjinha)')

    return (
        <Main active={active}>

            <Button className='m-1' onClick={()=>setActive('var(--roxo)')} color="roxinho">ROXINHO</Button>
            <Button className='m-1' onClick={()=>setActive('var(--laranjinha)')}>LARANJA</Button>
            <Button className='m-1' color='vermelho' onClick={()=>setActive('var(--vermelinho)')}>VERMELHO</Button>
            <Button className='m-1' color='roxo' onClick={()=>setActive('var(--roxinho)')}>ROXO</Button>

            <div className='bg-laranja text-white cursor-pointer shadow-lg hover:bg-laranja_hover font-bold'>TAILWINDCSS</div>

            <CustomDiv>EMOTIONCSS</CustomDiv>

            <div className={style.css_native}>PURE CSS</div>

            <div className='space-x-10'>
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h4>H4</h4>
            </div>

        </Main>
    )
}