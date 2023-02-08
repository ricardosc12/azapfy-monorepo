import { memo,useState } from "react"
import useStore from "@/storage"
import { useMotoristas } from "@/components/hooks/motoristas"
import { useUsuarios } from "@/components/hooks/usuarios"

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

    const auth = useStore(state=>state.auth)

    return (
        <div>
            {/* <Widget widgets={widgets}/>
            <div style={{display:'flex', width:'300px',margin:'auto',justifyContent:'center',alignItems:'center'}}>
                {charts?.map((chart,id)=>{
                    return <Chart key={id} {...chart}/>
                })}
            </div> */}
            <button onClick={()=>auth.update()}>Auth</button>
            {/* <button onClick={()=>setState(!state)}>TESTE {JSON.stringify()}</button> */}
            <InfoMot dados={motoristas} load={isLoading}/>
         </div>
    )

}