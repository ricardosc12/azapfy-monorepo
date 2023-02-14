import { useModal } from "@/components/hooks/modal";

const ModalDelete=({callback})=>{
    return (
        <div>
            <h1>MODAL DELETE</h1>
            <button onClick={()=>callback.current("DELETAR")}>CONFIRMAR</button>
        </div>
    )
}
    

const useModalDelete=()=>{
    return useModal({content:<ModalDelete/>})
}

export default useModalDelete