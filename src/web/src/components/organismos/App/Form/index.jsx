import styled from "@emotion/styled"
import TextField from "@ui/atoms/TextField";
import { useForm, Field } from "./useForm";
import Teste from "@/components/organismos/App/Form/Tete";

const Main=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: var(--white);
`

const Input=({
    meta: { id, value, error, onChange },
    label
})=>{

    return (
        <div>
            <TextField variant="outlined" error={!!error} label={label} id={id} value={value} onChange={(e)=>onChange(e.target.value)}/>
        </div>
    )
}

export default function FormPage(){

    const { Form, values, change, setError } = useForm('form-gerais')
  
    return (
        <>
        <Main>
            <Form>

                <Field label={"Nome"} id={'nome'} component={Input}/>

                <Field label={"Sobrenome"} id={'sobrenome'} component={Input}/>

            </Form>

            <button onClick={()=>console.log(values())}>GET</button>

            <button onClick={()=>change({nome:'Teste'})}>SET</button>

            <button onClick={()=>setError({nome:'Teste'})}>ERROR</button>
        </Main>

        <Teste/>

        </>

    );
}