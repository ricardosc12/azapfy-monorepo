import { useModal } from "@/components/hooks/modal"

const Modal=()=>{
    return (
        <div>
            <h1>keep mounted</h1>
            <p><input type="text" /></p>
        </div>
    )
}

const useModalKeep=(props)=>{
    return useModal({content:<Modal/>,propsModal:props})
}

export default useModalKeep