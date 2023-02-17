import { useEffect, useRef } from "react"
import ReactDOM from "react-dom/client";
import Modal from "@ui/molecules/Modal";

export function useModal({content, initial=false, propsModal}:any){

    const refModal = useRef(null)

    useEffect(()=>{
        // const _main = document.getElementById("__next")
        // const modal:HTMLDivElement = document.getElementById("main_app")?.appendChild(document.createElement('div')) as HTMLDivElement
        // modal.className = 'modal_container'
        const root = ReactDOM.createRoot(document.createElement('div'));
        root.render(<Modal ref={refModal} initial={initial} {...propsModal}>{content}</Modal>)
    },[])

    return refModal
}