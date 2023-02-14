import { useModal } from "@/components/hooks/modal"

const Modal=({handleSubmit,close})=>{
    return (
        <div>
            <h1>MODAL SEM OPEN ASYNC</h1>
            <div>PODE PASSAR FUNÇÃO DE RETORNO POR PROPS</div>
            <button onClick={()=>handleSubmit(close)}>SAIR</button>
        </div>
    )
}

const useModalWithoutAsync=()=>{
    return useModal({content:<Modal/>})
}

export default useModalWithoutAsync