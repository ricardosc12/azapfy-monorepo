import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { useMotoristas, motoristaStoragePros } from "@/components/hooks/motoristas"
// import { useUsuarios, usuariosStoragePros } from '@/components/hooks/usuarios';

export const useDashStore = create(immer(set=>({
    dados:{
        main:{
            motoristas:[],
            usuarios:[]
        },
        create:{
            nome:"Ricardo",
            idade:123
        }
    },
    change: {
        dispatch: {
            setDados:(payload)=>set(state=>{
                state.dados.create.nome = payload
            }),
            setNome:(payload)=>set(state=>{
                state.dados.main.nome = payload
            }),
            setMotoristas:(payload)=>set(state=>{
                state.dados.main.motoristas = payload
            }),
            setUsuarios:(payload)=>set(state=>{
                state.dados.main.usuarios = payload
            })
        }
    }
})))

export const useCreateDashStore=(dispatch)=>{
    useMotoristas(motoristaStoragePros(dispatch.setMotoristas))
    // useUsuarios(usuariosStoragePros(dispatch.setUsuarios))
}