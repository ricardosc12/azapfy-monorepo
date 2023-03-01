import { useEffect } from "react";
import useCliBoard from "@/stories/hooks/useClipboard";

export default function useClips(){
    useEffect(()=>{

        //Cores

        document.getElementById("primary")?.addEventListener('click',useCliBoard('<ActionButton><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("laranjinha")?.addEventListener('click',useCliBoard('<ActionButton color="laranjinha"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("roxo")?.addEventListener('click',useCliBoard('<ActionButton color="roxo"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("roxinho")?.addEventListener('click',useCliBoard('<ActionButton color="roxinho"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("vermelho")?.addEventListener('click',useCliBoard('<ActionButton color="vermelho"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("vermelinho")?.addEventListener('click',useCliBoard('<ActionButton color="vermelinho"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("cinza")?.addEventListener('click',useCliBoard('<ActionButton color="cinza"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("cinzinha")?.addEventListener('click',useCliBoard('<ActionButton color="cinzinha"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))

        //Sizes

        document.getElementById("small")?.addEventListener('click',useCliBoard('<ActionButton size="small"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("medium")?.addEventListener('click',useCliBoard('<ActionButton><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))
        document.getElementById("large")?.addEventListener('click',useCliBoard('<ActionButton size="large"><FontAwesomeIcon icon={faMagnifyingGlass}/></ActionButton>'))

    },[])
}