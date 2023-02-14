import { useDashStore } from "../storage"

export default function CreateDashboard(){

    const dispatch  = useDashStore(state=>state.dispatch)
    const {nome,idade} = useDashStore(state=>state.dados.create)

    console.log('render')

    return <div>
        Create Dashboard
        {/* <div><p><b>{`${nome} ${idade}`}</b></p></div>
        <div className="mt-10">
            <div className="mb-5">
                <button onClick={()=>dispatch.setNome(document.getElementById('nome').value)}>SET NOME</button>
                <input className="ml-5" id='nome' type="text" />
            </div>
            <div className="mtb-5">
                <button onClick={()=>dispatch.setDados(document.getElementById('create').value)}>SET CREATE</button>
                <input className="ml-5" id='create' type="text" />
            </div>
        </div> */}

        <div>
            {[...Array(100)].map((_,index)=><button className="m-1 bg-slate-700 p-2 rounded text-white hover:bg-blue-600" key={`bt-${index}`}>CONFIRMAR</button>)}
        </div>

    </div>
}