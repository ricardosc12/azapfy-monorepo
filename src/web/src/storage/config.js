export const isDebugMod=()=>{
    try{
        if(sessionStorage.getItem('azaper_debug')) return true
        return false
    }catch{
        return false
    }

}