import { useModal } from "@/components/hooks/modal"

const ModalProps=({callback,...props})=>{
    return (
        <div>
            <h1>MODAL COM PROPS ON OPEN</h1>
            <pre>{JSON.stringify(props)}</pre>
            <button onClick={()=>callback.current(props)}>RETORNAR PROPS</button>
        </div>
    )
}

const useModalPropsOpen=()=>{
    return useModal({content:<ModalProps/>})
}

export default useModalPropsOpen