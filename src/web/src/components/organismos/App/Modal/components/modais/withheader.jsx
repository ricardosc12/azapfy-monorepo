import { useModal } from "@/components/hooks/modal"
import { ModalHeader } from "@ui/index"
import Button from "@ui/atoms/Button"

const Modal = ({callback}) => {

    const handleClose=(msg)=>{
        callback.current(msg)
    }

    return (
        <div className="modal" style={{width:'350px'}}>

            <ModalHeader onClick={()=>handleClose()}>Excluir todos os protocolos ?</ModalHeader>

            <p className="modal-comment">Essa ação não poderá ser desfeita.</p>

            <div className="flex flex-row justify-end items-center pt-4 mb-1">
                <Button onClick={()=>handleClose('ABORTAR')} className="mx-1">Cancelar</Button>
                <Button onClick={()=>handleClose('EXCLUIR')} className="mx-1" color='laranjinha'>Excluir</Button>
            </div>
            
        </div>

    )
}

const useModalHeader=()=>{
    return useModal({content:<Modal/>})
}

export default useModalHeader