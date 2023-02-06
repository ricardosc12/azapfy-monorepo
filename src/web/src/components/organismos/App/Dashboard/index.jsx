import Chart from "@/components/molecules/Chart"
import Widget from "@/components/molecules/Widget"
import { server } from "@/config"
import { useEffect } from "react"
import useSWR from 'swr'

const fetcher = async ([url,data]) => await fetch(url,{
    method:'POST'
}).then((res) => res.json())

const useDash = () => {
    const { data, error, isLoading } = useSWR([`${server}/api/dashboard`], fetcher)
    return {
        widgets: data?.widgets,
        charts: data?.charts
    }
}

export default function Dash(){

    const { widgets, charts } = useDash()

    return (
        <div>
            <Widget widgets={widgets}/>
            <div style={{display:'flex', width:'300px',margin:'auto',justifyContent:'center',alignItems:'center'}}>
                {charts?.map((chart,id)=>{
                    return <Chart key={id} {...chart}/>
                })}
            </div>
         </div>
    )

}