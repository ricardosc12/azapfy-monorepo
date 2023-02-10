import { getMotoristas } from "@/api/Relacao"
import timezone from "@/utils/timezone"
import { getBases } from "@/utils/auth"
import useStore from "@/storage"
import { useQuery, useQueryClient } from "react-query"
import { useRef } from "react"


interface Motorista {
    nome:string,
    cpf:string
}

const mapMotoristas=(data:Array<Motorista>)=>{
    return data.map((moto) => ({
        label: moto.nome,
        value: moto.cpf,
    }));
}

interface UseMotoristasProps {
    mapResult?: Function | Boolean,
    request?: any,
    queryProps?: {},
    storage?: Function
}

const mapFunction=(mapResult?:Function | Boolean, data?:any)=>{
    return mapResult===true?
    mapMotoristas(data.dados):
    typeof mapResult === 'function'?mapResult(data.dados):
    data
}

const useMotoristas=({mapResult=true,request,queryProps,storage}:UseMotoristasProps={})=>{

    const auth:any = useStore(state=>state.auth)

    const queryKeys = useRef(['motoristas',auth.bases, auth.grupo_ativo, mapResult]).current

    if(storage) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var queryClient = useQueryClient()
    }

    const query = useQuery(queryKeys, 
        async ()=> {

            if(storage) {
                const data:any = queryClient.getQueryData(queryKeys)
                if(data){
                    storage(data)
                }
            }

            const requestData = {
                grupo_emp: auth.grupo_ativo,
                bases: getBases(auth, { active: true, name: true }),
                timezone: timezone(),
                ...request
            }


        
            const res = await getMotoristas(requestData)

            if(res.status !== 200 || !res.data?.status===true) {
                throw res.data?.mensagem || "Erro ao buscar motoristas !"
            }

            if(!Array.isArray(res.data.dados)) {
                throw "Erro interno ao obter motoristas !"
            }
            return mapFunction(mapResult,res.data)
        },
    {
        refetchOnWindowFocus:false,
        keepPreviousData:true,
        retry:false,
        notifyOnChangeProps:['data','error'],
        ...queryProps
    })

    return query

}

const motoristaStoragePros=(dispatch:Function)=>{
    return {
        queryProps:{
            notifyOnChangeProps:[],
            onSuccess:(data:any)=>{
                dispatch(data)
            }
        },
        storage:dispatch
    }
}


export { useMotoristas, motoristaStoragePros }