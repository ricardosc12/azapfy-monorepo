import { useModal } from "@/components/hooks/modal"
import { ModalHeader } from "@ui/index"

const Modal = ({callback}) => {

    const handleClose=()=>{
        callback.current("FIM")
    }

    return (
        <div className="modal" style={{width:'300px'}}>
            <ModalHeader onClick={handleClose}>Comprovações</ModalHeader>
        </div>
    )
}

const useModalHeader=()=>{
    return useModal({content:<Modal/>})
}

export default useModalHeader