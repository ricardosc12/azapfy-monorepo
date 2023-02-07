import Chart from "@/components/molecules/Chart"
import Widget from "@/components/molecules/Widget"
import { server } from "@/config"
import { useMemo, useRef, useState } from "react"
import useSWR from 'swr'
import { useMotoristas } from "./hooks/motoristas"

function Info({data}){

    const [state,setState] = useState(false)

    return (
        <div>
            <button onClick={()=>setState(!state)}>TESTE</button>
            <div>
                {Array.isArray(data?.dados)?data.dados.map((data,index)=>{
                    return <p key={'mot'+index}>{data.nome}</p>
                }):''}
            </div>
        </div>
    )
   
}

export default function Dash(){

    const { data } = useMotoristas()

    return (
        <div>
            {/* <Widget widgets={widgets}/>
            <div style={{display:'flex', width:'300px',margin:'auto',justifyContent:'center',alignItems:'center'}}>
                {charts?.map((chart,id)=>{
                    return <Chart key={id} {...chart}/>
                })}
            </div> */}

            <Info data={data}/>
         </div>
    )

}