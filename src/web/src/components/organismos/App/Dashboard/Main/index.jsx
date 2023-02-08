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
                    return <p key={'mot'+index}>{data.label}</p>
                }):''}
            </div>
        </div>
    )
   
})

export default function Dash(){

    const { data: motoristas, error, isLoading } = useMotoristas()

    const { data: usuarios } = useUsuarios()

    const {dados:{main:{nome,idade}}} = useDashStore()

    const auth = useStore(state=>state.auth)

    return (
        <div>
            <button onClick={()=>auth.update()}>Auth</button>
            <div><p><b>{`${nome} ${idade}`}</b></p></div>
            <InfoMot dados={motoristas} load={isLoading}/>
         </div>
    )

}