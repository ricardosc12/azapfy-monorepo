import { cloneElement , useEffect, useLayoutEffect, useRef, useState } from "react";

export const Field=({id, onChange, component, ...props})=>{

    const onchange=useRef((value)=>{
        onChange&&onChange(value)
        setMetaProps(prev=>({...prev, value: value, error:false}))
    }).current

    const [metaProps, setMetaProps] = useState({
        id: id,
        value: '',
        error: false,
        onChange: onchange
    })

    const meta = useRef({
        id: id,
        get: {...metaProps},
        set: setMetaProps
    }).current

    const refDiv = useRef()

    useLayoutEffect(()=>{
        refDiv.current.custom_data_meta = meta
    },[])

    useEffect(()=>{
        if(refDiv.current.custom_data_meta) {
            refDiv.current.custom_data_meta.get = {...metaProps}
        }
    },[metaProps])

    const Component = useRef(component).current

    return (
        <div ref={refDiv} id={`formvinput`}>
            {cloneElement(<Component/>, { meta: metaProps, ...props })}
        </div>
    )
}

const Form=({id, children})=>{
    return (
        <div id={`formv-${id}`}>
            {children}
        </div>
    )
}

const getInputs=(form)=>{
    const form_ = document.getElementById(`formv-${form}`)
    const inputs = form_.querySelectorAll('#formvinput')
    let input_ = {}
    for (const input of inputs) {
        const get = input.custom_data_meta.get;
        input_[get.id] = input;
    }
    return input_
}

export const change=(form,sets)=>{
    const inputs = getInputs(form)
    for (const [id, value] of Object.entries(sets)) {
        try{inputs[id].custom_data_meta.set(prev=>({ ...prev, value: value }))}
        catch{}
    }
}

export const useForm=(form)=>{

    const getInput=useRef(()=>{
        const form_ = document.getElementById(`formv-${form}`)
        const inputs = form_.querySelectorAll('#formvinput')
        let input_ = {}
        for (const input of inputs) {
            const get = input.custom_data_meta.get;
            input_[get.id] = input;
        }
        return input_
    }).current

    const metaProps = {
        Form: (props)=><Form id={form} {...props}/>,
        values: ()=>{
            const form_ = document.getElementById(`formv-${form}`)
            const inputs = form_.querySelectorAll('#formvinput')
            let values = {}
            Array.from(inputs).forEach(input => {
                const get = input.custom_data_meta.get
                values[get.id] = get.value
            });
            return values
        },
        change:(sets)=>{
            let input_ = getInput()
            for (const [id, value] of Object.entries(sets)) {
                try{input_[id].custom_data_meta.set(prev=>({ ...prev, value: value }))}
                catch{}
            }
        },
        setError:(sets)=>{
            let input_ = getInput()
            for (const [id, value] of Object.entries(sets)) {
                try{input_[id].custom_data_meta.set(prev=>({ ...prev, error: value }))}
                catch{}
            }
        }
    }

    return metaProps
}