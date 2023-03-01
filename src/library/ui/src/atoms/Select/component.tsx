import {useRef, useEffect, useState, useCallback} from 'react'
import styles from './css.module.css'
import {List, AutoSizer} from 'react-virtualized'
import './styleList.css'
import {iconClose, iconArrow} from './Icons/icon'

function useDebounce(func:any,delay:any){
    const timeoutRef:any = useRef(null)
    function debounceFn(...args:any){
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(func.bind(null,...args), delay);
    }
    return debounceFn
}

const AllSelects=({count, onClick}:any)=>{
    return (
        <div onClick={onClick} className={styles.all}>
            <p>Selecionados...</p>
            <span>{count>9?'...':count}</span>
        </div>
    )
}

const Dropdown=({
    data,
    input:{ name, value, onChange },
    label,
    width='130px',
    maxWidth='500px',
    placeholder,
    disabled,
    required,
    meta:{ dispatch, error, form },
    multi,
    collapse=3,
    valueToSet,
    custom,
    style,
    onchange,
    show,
}:any)=>{

    if(show===false) return <></>

    const ref = useRef(null)
    const refInput = useRef(null)
    const refModal = useRef(null)
    const refModal_ = useRef(false)

    const width_ = useRef(parseInt(maxWidth.replace('px',''))-20+'px').current
    const index_ = useRef(false);

    const state = useRef({filter:'',display:false})

    const [update, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleFilter = useDebounce(handlerSetFilter,60)

    function handlerSetFilter(e){
        if(!noSelectData.current.length) return
        updateList(e)
        // try{ref.current.querySelector(`#item-${countKey}`).className = ''}
        // catch{}
        // try{ref.current.querySelector(`#item-0`).className = 'mark_'}
        // catch{}
        setFilter(e)
    }

    const selected = useRef(multi?[]:'')
    const noSelectData = useRef([])
    

    function handleChange(e){
        onChange(e)
        onchange&&onchange(e)
    }

    // let countKey = 0
    // function handleKey(e){
    //     if(e.keyCode == 13){
    //         // handleRemove(noSelectData.current[countKey],null)
    //         return
    //     }
    //     if(!noSelectData.current.length) return
    //     try{ref.current.querySelector(`#item-${countKey}`).className = ''}
    //     catch{}
    //     if(e.keyCode == 38 && countKey>0) countKey-=1
    //     //CIMA
    //     else if(e.keyCode==40 && countKey<noSelectData.current.length-2) countKey+=1
    //     try{ref.current.querySelector(`#item-${countKey}`).className = 'mark_'}
    //     catch{}        
    // }

    useEffect(()=>{
        if(Array.isArray(data)){
            if(data.length){
                if(valueToSet){
                    if(multi) noSelectData.current = data.filter(x =>!valueToSet.some(item=>x.value==item.value))
                    else noSelectData.current = data.filter(item=>item.value!=valueToSet.value)
                }
                else {
                    if(multi) noSelectData.current = data.filter(x =>!selected.current.some(item=>x.value==item.value))
                    else noSelectData.current = [...data]
                }
                updateList()
                if(valueToSet){
                    selected.current = valueToSet
                    handleChange(selected.current)
                }
            }
            else {
                if(noSelectData.current.length){
                    noSelectData.current = []
                    updateList()
                }
            }

        }
    },[data])

    useEffect(()=>{
        if(label || placeholder){
            let text = label||placeholder
            ref.current.getElementsByTagName("label")[0].style.width = (text.length+2) + 'ch'
        }
    },[label,placeholder])

    useEffect(()=>{
        if(!(value==selected.current)){
            if(multi) {
                noSelectData.current = value?data.filter(x =>!value.some(item=>x.value==item.value)):data
                selected.current = value
            }
            else {
                let aux_value = Array.isArray(value)?value[0]:value
                noSelectData.current = [...data]
                selected.current = aux_value
            }
            updateList()
        }
    },[value])

    function handleRemove(e,ev){
        ev&&ev.stopPropagation()
        if(selected.current==e) return
        if(multi) {
            noSelectData.current.some((dt,id)=>dt.value==e.value&&(noSelectData.current.splice(id,1)))
            selected.current = [...selected.current,e]
            state.current.filter = ''
        }
        else {
            index_.current = parseInt(ev.target.id.split('-')[1])
            selected.current = e
            state.current = {display:false,filter:''}

        }
        refInput.current.value = ''
        refInput.current.style.width = '15px'
        refInput.current.focus()
        multi&&updateList()
        handleChange(selected.current)
    }

    function setFilter(e){
        state.current.filter = e
        forceUpdate()
    }
    function onKeydown(e){
        e.target.style.width = (e.target.value.length+2) + 'ch'
        handleFilter(e.target.value)
    }
    function remove(value,ev){
        ev.stopPropagation()
        if(!multi) return
        let auxSelected = [...selected.current]
        let el = null
        auxSelected.some((item,id)=>{
            if(item.value==value){
                el = auxSelected.splice(id,1)[0]
                return true
            }
        })
        if(!noSelectData.current.length) noSelectData.current.push(el)
        else {
            noSelectData.current.some((dt,index)=>{
                if(el.label.localeCompare(dt.label) == -1){
                    noSelectData.current.splice(index,0,el)
                    return true
                }
                else if (index==noSelectData.current.length-1){
                    noSelectData.current.push(el)
                }
            })
        }
        selected.current = auxSelected
        updateList()
        handleChange(selected.current)
    }
    
    const item=(item)=>{
        return <div>
                <p>{item.label}</p>
                <span onClick={(e)=>!disabled&&remove(item.value,e)}>
                    <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                </span>
                </div>
    }

    const listFilted = useRef([])


    function updateList(value){
        let filter = (value||value==='')?value:state.current.filter
        listFilted.current = noSelectData.current.filter(item=>item.label.toString().toLowerCase().includes(filter.toLowerCase()) ||item.value.toString().toLowerCase().includes(filter.toLowerCase()) )
        if(ref.current && state.current.display) {
            let heightList = listFilted.current.length?listFilted.current.length*30:0
            let height = heightList<245?heightList:245
            let list = ref.current.querySelector('#list-container')
            list && (list.style.height = `${height}px`)         
        }
    }

    function setValue(e){
        selected.current.some((dt,id)=>dt.value==e.value&&(selected.current.splice(id,1)))
        if(!noSelectData.current.length) {
            noSelectData.current.push(e)
            return
        }
        noSelectData.current.some((dt,index)=>{
            if(e.label.localeCompare(dt.label) == -1){
                noSelectData.current.splice(index,0,e)
                return true
            }
            else if (index==noSelectData.current.length-1){
                noSelectData.current.push(e)
            }
        })
    }   

    function updateFromModal(){
        updateList()
        handleChange([...selected.current])
        forceUpdate()
    }

    function focusInput(){
        if(disabled) return
        if(refModal_.current) return

        refInput.current.focus()

        if(!state.current.display) {
            state.current = {display:true,filter:''}
            forceUpdate()
        }

        setTimeout(() => {
            let heightList = listFilted.current.length?listFilted.current.length*30:0
            let height = heightList<245?heightList:245
            let list = ref.current.querySelector('#list-container')
            list && (list.style.height = `${height}px`)
        });
    }
    function blurInput(e){
        if(disabled || (state.current.filter == '' && state.current.display==false)) return
        if(refModal_.current) return
        if (!e.currentTarget.contains(e.relatedTarget)) {
            if(state.current.filter!=''){
                state.current.filter = ''
                updateList()
            }
            state.current.display = false
            refInput.current.value = ''
            refInput.current.style.width = '15px'
            forceUpdate()
        }
    }

    function clearAll(){
        noSelectData.current = [...data]
        selected.current = []
        updateList()
        handleChange(selected.current)
    }

    async function handleAll(){
        if(selected.current.length){
            noSelectData.current = [...data]
            selected.current = []
            handleChange(selected.current)
            updateList()
            return
        }
        noSelectData.current = []
        selected.current = [...data]
        updateList()
        handleChange(selected.current)
    }

    function openModal(){
        if(disabled) return
        state.current = {filter:'',display:false}
        forceUpdate()
        refModal_.current = true
        refModal.current.open()
    }

    function removeItem(e){
        e.stopPropagation()
        noSelectData.current = data
        selected.current = ''
        updateList()
        ref.current.blur()
        handleChange(selected.current)
    }

    return (
        <div ref={ref} onClick={focusInput} onBlur={blurInput} className={`${styles.menu} ${disabled&&styles.disabled} ${error&&styles.error} `} style={{minWidth:width,maxWidth:maxWidth,...style}} tabIndex="-1">
            <div className={styles.container}>
                <div className={styles.valueLabel}>
                    <label className={styles.label}>{`${label||placeholder} ${(!!required||!!error)?'*':''}`}</label>
                    {multi?value.length?value.length>collapse?<AllSelects onClick={openModal} count={value.length}/>:
                    <div id="value-container" className={styles.valueContainer} style={{maxWidth:width_}}> 
                        {value.map(cel=>{
                            return item(cel)
                        })}
                    </div>:'':
                    value?<div id="value-container" className={styles.valueContainer}>
                        <h5>{value.label}</h5>
                    </div>:''
                    }
                </div>
                <div className={styles.containerInput}>
                    <input name="filter-input" disabled={disabled} ref={refInput} onInput={onKeydown} className={styles.input} type="text" autocomplete="off"/>
                </div>
                <div className={styles.arrow}>{iconArrow()}</div>
                {(!multi&&value&&(custom?.isClearable!==false))&&<div className={styles.iconClose} onClick={removeItem}>{iconClose()}</div>}
            </div>
            <div id="list" className={styles.list}>
                {state.current.display&&<div id="list-main" className={styles.listMain}>
                    {
                    !data.length?<div className={styles.selectAll}>Sem dados</div>:multi?
                    <div onClick={handleAll} className={styles.selectAll}>{value.length?'Remover Todos':'Selecionar Todos'}</div>:''
                    }
                    <div className={styles.listContainer} id="list-container">
                        <AutoSizer>
                            {({height, width})=>(
                            
                            <List
                                width={width}
                                height={noSelectData.current.length?height:0}
                                rowCount={listFilted.current.length}
                                rowHeight={30}
                                rowRenderer={({...props})=><RowRenderer selected={index_.current} handleRemove={handleRemove} list={listFilted.current} {...props}/>}
                            />
                            )}
                        </AutoSizer>
                    </div>

                </div>}
            </div>
            {/* {multi&&<ModalMost clearAll={clearAll} list={value} update={updateFromModal} setValue={setValue} modal={refModal_} ref={refModal}/>} */}
        </div>
    )
}

const RowRenderer=({list,style,index,handleRemove,selected,...props})=>{
    return (
        <div key={index} style={style} className={"virtual-item"} onClick={(e)=>handleRemove(list[index],e)}>
            <p className={selected===index?styles.selected:''} id={`item-${index}`}>
                {list[index].label}
            </p>
        </div>
    )
}

export default Dropdown