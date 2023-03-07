import { change } from "@/components/organismos/App/Form/useForm"

export default function Teste(){

    function handleChange(){
        change('form-gerais',{
            sobrenome:"Sobrenome"
        })
    }

    return (
        <div>
            <h3>Teste change global</h3>
            <button onClick={handleChange}>SET</button>
        </div>
    )
}