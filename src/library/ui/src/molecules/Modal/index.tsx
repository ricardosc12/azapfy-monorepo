import Dialog, {DialogProps} from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { cloneElement, forwardRef, useImperativeHandle, useState, useRef } from 'react';

const DialogStyled = styled(Dialog)<DialogProps>(({}) => ({

}))

const Modal = forwardRef(function Modal({initial,childRef=false,...props}:any,ref){

    const [open, setOpen] = useState(initial)

    const callback:any = useRef(null)

    const close=useRef(()=>{
        callback.current?.(undefined)
        setOpen(false)
    }).current

    const child:any = useRef(cloneElement(props.children,{callback:callback,close:close}))

    useImperativeHandle(ref,()=>({
        open(props:any){
            if(props){
                child.current = cloneElement(child.current,props)
            }
            setOpen(true)
        },
        callback(resolve:any,data:any){
            resolve(data)
            setOpen(false)
        },
        openPromise(props:any){
            if(props){
                child.current = cloneElement(child.current,props)
            }
            return new Promise(resolve=>{
                callback.current = (data:any)=>this.callback(resolve,data)
                setOpen(true)
            })
        },
        close(){
            setOpen(false)
        },
    }))



    return (
        <DialogStyled open={open} maxWidth={false} onClose={close} {...props}>
            {child.current}
        </DialogStyled>
    )
})

export default Modal