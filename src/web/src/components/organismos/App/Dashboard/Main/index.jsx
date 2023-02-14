import { useModal } from "@/components/hooks/modal"
import Modal from "@ui/molecules/Modal"
import { forwardRef, memo, useEffect, useImperativeHandle, useLayoutEffect, useState } from "react"
import { useDashStore } from "../storage"
import { useCreateDashStore } from "../storage"

export const InfoMot = memo(function InfoMot({dados,load}){

    if(load) {
        return [...Array(10)].map((_,index)=>{
            return <p key={'moto'+index}>Carregando ...</p>
        })
    }

    return (
        <div>
            <div>
                {Array.isArray(dados)?dados.slice(-10).map((data,index)=>{
                    return <p key={'mot'+index}>{data.label}</p>
                }):''}
            </div>
        </div>
    )
})

const ModalTeste=({callback,data,...props})=>{

    function submit(){
        const text = document.getElementById('text-teste').value
        callback.current(text)
    }

    return (
        <div id="teste-modal">
            <input id='text-teste' type="text" />
            <button onClick={submit}>confirm</button>
        </div>
    )
}

export default function Dash(){

    // const { dispatch } = useDashStore(state=>state.change)

    const { motoristas, usuarios } = useDashStore(state=>state.dados.main)

    const [update,setUpdate] = useState(false)

    const refModal = useModal({content:<ModalTeste/>,propsModal:{keepMounted:true}})

    // useCreateDashStore(dispatch)

    async function handleDelete(){
        const data = await refModal.current.openPromise()

        console.log(data)
    }

    return (
        <div>
            {/* <button onClick={()=>auth.update()}>Auth</button> */}
            {/* <div><p><b>{`${nome} ${idade}`}</b></p></div> */}
            <button onClick={handleDelete}>MODAL</button>
            <button onClick={()=>console.log(refModal)}>TESTE</button>
            <button onClick={()=>(setUpdate(!update))}>RENDER</button>
            <InfoMot dados={motoristas} load={!motoristas || !motoristas.length}/>
            {/* {[...Array(100)].map((bt,index)=><ButtonMui key={`bt-${index}`} />)} */}
            {/* <Modal>
                <div style={{width:'1000px'}}>asd</div>
            </Modal> */}
         </div>
    )

}