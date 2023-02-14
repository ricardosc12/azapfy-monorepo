import { useEffect, useRef } from "react"
import ReactDOM from "react-dom/client";
import Modal from "@ui/molecules/Modal";

export function useModal({content, initial=false, propsModal}:any){

    const refModal = useRef(null)

    useEffect(()=>{
        const root = ReactDOM.createRoot(document.createElement('div'));
        root.render(<Modal ref={refModal} initial={initial} {...propsModal}>{content}</Modal>)
    },[])

    return refModal
}