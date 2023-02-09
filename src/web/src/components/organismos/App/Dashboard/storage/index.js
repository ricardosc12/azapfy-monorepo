import { useEffect } from 'react';
import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { useMotoristas } from "@/components/hooks/motoristas"
import { motoristaStoragePros } from "@/components/hooks/motoristas"

export const useDashStore = create(immer(set=>({
    dados:{
        main:{
            motoristas:[]
        },
        create:{
            nome:"Ricardo",
            idade:123
        }
    },
    dispatch:{
        setDados:(payload)=>set(state=>{
            state.dados.create.nome = payload
        }),
        setNome:(payload)=>set(state=>{
            state.dados.main.nome = payload
        }),
        setMotoristas:(payload)=>set(state=>{
            state.dados.main.motoristas = payload
        })
    }
})))

export const useCreateDashStore=(setMotoristas)=>{
    useMotoristas(motoristaStoragePros(setMotoristas))
}