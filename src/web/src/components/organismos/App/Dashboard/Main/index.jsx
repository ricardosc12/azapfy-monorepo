import { memo } from "react"
import { useDashStore } from "../storage"
import { useCreateDashStore } from "../storage"

export const InfoMot = memo(function InfoMot({dados,load}){

    if(load) {
        return [...Array(10)].map((_,index)=>{
            return <p key={'moto'+index}>Carregando ...</p>
        })
    }

    return (
        <div>
            <div>
                {Array.isArray(dados)?dados.slice(-10).map((data,index)=>{
                    return <p key={'mot'+index}>{data.label}</p>
                }):''}
            </div>
        </div>
    )
   
})

export default function Dash(){

    const { dispatch } = useDashStore(state=>state.change)

    const { motoristas } = useDashStore(state=>state.dados.main)

    useCreateDashStore(dispatch)

    return (
        <div>
            {/* <button onClick={()=>auth.update()}>Auth</button> */}
            {/* <div><p><b>{`${nome} ${idade}`}</b></p></div> */}
            <InfoMot dados={motoristas} load={!motoristas || !motoristas.length}/>
         </div>
    )

}