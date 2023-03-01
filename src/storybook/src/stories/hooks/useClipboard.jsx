export default function useCliBoard(text){
    return ()=>{
        navigator.clipboard.writeText(text)
    }
}