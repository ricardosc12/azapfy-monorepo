import { getMotoristas } from "@/api/Relacao"
import timezone from "@/utils/timezone"
import { getBases } from "@/utils/auth"
import useStore from "@/storage"
import { useEffect, useRef } from "react"
import useSWR from 'swr'

const useMotoristas=()=>{

    const auth = useStore(state=>state.auth)

    const requestData = {
        grupo_emp: auth.grupo_ativo,
        bases: getBases(auth, { active: true, name: true }),
        timezone: timezone(),
    };

    console.log('Request')

    return useSWR(requestData, getMotoristas,{
        revalidateOnFocus:false,
    })
}

export { useMotoristas }