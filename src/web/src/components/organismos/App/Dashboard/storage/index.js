import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";

export const useDashStore = create(immer(set=>({
    dados:{
        main:{
            nome:"Ricardo",
            idade:123
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
        })
    }
})))