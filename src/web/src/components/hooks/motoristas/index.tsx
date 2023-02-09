import { getMotoristas } from "@/api/Relacao"
import timezone from "@/utils/timezone"
import { getBases } from "@/utils/auth"
import useStore from "@/storage"
import { useQuery } from "react-query"
import { useQueryClient } from 'react-query'


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

const useMotoristas=({mapResult=true,request,queryProps,storage}:UseMotoristasProps)=>{

    const auth:any = useStore(state=>state.auth)

    if(storage) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var queryClient = useQueryClient()
    }

    const query = useQuery(['motoristas',auth.bases, auth.grupo_ativo], 
        async ()=> {

            const requestData = {
                grupo_emp: auth.grupo_ativo,
                bases: getBases(auth, { active: true, name: true }),
                timezone: timezone(),
                ...request
            }

            if(storage) {
                const data:any = queryClient.getQueryData(['motoristas',auth.bases, auth.grupo_ativo])
                if(data && data.status===true){
                    storage(mapFunction(mapResult,data.dados))
                }
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