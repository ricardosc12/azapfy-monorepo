import { useDashStore } from "../storage"

export default function CreateDashboard(){

    const dispatch  = useDashStore(state=>state.dispatch)
    const {nome,idade} = useDashStore(state=>state.dados.create)

    console.log('render')

    return <div>
        Create Dashboard
        <div><p><b>{`${nome} ${idade}`}</b></p></div>
        <div className="mt-10">
            <div className="mb-5">
                <button onClick={()=>dispatch.setNome(document.getElementById('nome').value)}>SET NOME</button>
                <input className="ml-5" id='nome' type="text" />
            </div>
            <div className="mtb-5">
                <button onClick={()=>dispatch.setDados(document.getElementById('create').value)}>SET CREATE</button>
                <input className="ml-5" id='create' type="text" />
            </div>
        </div>

    </div>
}