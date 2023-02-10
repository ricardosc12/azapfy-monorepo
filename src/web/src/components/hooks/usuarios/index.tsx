import { getUsers } from "@/api/Cadastro"
import timezone from "@/utils/timezone"
import { getBases } from "@/utils/auth"
import useStore from "@/storage"
import { useQuery, useQueryClient } from "react-query"
import { useRef } from 'react'

interface Usuario {
    nome:string,
    cpf:string
}

const mapUsuarios=(data:Array<Usuario>)=>{
    return data
}

interface UseUsuariosProps {
    mapResult?: Function | Boolean,
    request?: any,
    queryProps?:{},
    storage?: Function
}

const mapFunction=(mapResult?:Function | Boolean, data?:any)=>{
    return mapResult===true?
    mapUsuarios(data.dados):
    typeof mapResult === 'function'?mapResult(data.dados):
    data
}

const useUsuarios=({mapResult=true,request,queryProps,storage}:UseUsuariosProps={})=>{

    const auth:any = useStore(state=>state.auth)

    const queryKeys = useRef(['usuarios',auth.bases, auth.grupo_ativo, mapResult]).current

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
                paginacao: 250,
                skip:0,
                bases: getBases(auth, { active: true, name: true }),
                timezone: timezone(),
                ...request
            }

            const res = await getUsers(requestData)

            if(res.status !== 200 || !res.data?.status===true) {
                throw res.data?.mensagem || "Erro ao buscar usuários !"
            }

            if(!Array.isArray(res.data.dados)) {
                throw "Erro interno ao obter usuários !"
            }
            return mapFunction(mapResult,res.data)
        },

        {
            refetchOnWindowFocus:false,
            keepPreviousData:true,
            retry:false,
            notifyOnChangeProps:['data','error'],
            ...queryProps
        }  
    )

    return query
}

const usuariosStoragePros=(dispatch:Function)=>{
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


export { useUsuarios, usuariosStoragePros }