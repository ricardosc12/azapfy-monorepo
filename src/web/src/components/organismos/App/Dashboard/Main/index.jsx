import { memo } from "react"
import useStore from "@/storage"
import { useMotoristas } from "@/components/hooks/motoristas"
import { useUsuarios } from "@/components/hooks/usuarios"
import { useDashStore } from "../storage"

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
                    return <p key={'mot'+index}>{data.nome}</p>
                }):''}
            </div>
        </div>
    )
   
})

export default function Dash(){

    const { motoristas } = useDashStore(state=>state.dados.main)
    const { setMotoristas } = useDashStore(state=>state.dispatch)

    useMotoristas({
        queryProps:{
            notifyOnChangeProps:[],
            onSuccess:(data)=>{
                setMotoristas(data.dados)
            }
        },
        storage:setMotoristas
    })

    return (
        <div>
            {/* <button onClick={()=>auth.update()}>Auth</button> */}
            {/* <div><p><b>{`${nome} ${idade}`}</b></p></div> */}
            <InfoMot dados={motoristas} load={!motoristas || !motoristas.length}/>
         </div>
    )

}