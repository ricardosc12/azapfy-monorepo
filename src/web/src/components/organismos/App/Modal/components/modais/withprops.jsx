import { useModal } from "@/components/hooks/modal"

const ModalProps=({callback,...props})=>{
    return (
        <div>
            <h1>MODAL COM PROPS DEFAULT</h1>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    )
}

const useModalProps=(props)=>{
    return useModal({content:<ModalProps {...props}/>})
}

export default useModalProps