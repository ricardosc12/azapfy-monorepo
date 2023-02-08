import { getUsers } from "@/api/Cadastro"
import timezone from "@/utils/timezone"
import { getBases } from "@/utils/auth"
import useStore from "@/storage"
import { useQuery } from "react-query"

interface Usuario {
    nome:string,
    cpf:string
}

const mapUsuarios=(data:Array<Usuario>)=>{
    return data
}

interface UseUsuariosProps {
    map?: Function | Boolean,
    request?: any
}

const useUsuarios=({map,request}:UseUsuariosProps = {map: false})=>{

    const auth:any = useStore(state=>state.auth)

    const query = useQuery(['usuarios',auth.bases, auth.grupo_ativo], async ()=> {
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
        return map===true?
            mapUsuarios(res.data.dados):
            typeof map === 'function'?map(res.data.dados):
            res.data
    },{
        refetchOnWindowFocus:false,
        keepPreviousData:true,
        retry:false
    })

    return query

}



export { useUsuarios }