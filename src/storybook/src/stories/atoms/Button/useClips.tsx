import { useEffect } from "react";
import useCliBoard from "@/stories/hooks/useClipboard";

export default function useClips(){
    useEffect(()=>{

        //Cores

        document.getElementById("primary")?.addEventListener('click',useCliBoard('<Button>Texto</Button>'))
        document.getElementById("laranjinha")?.addEventListener('click',useCliBoard('<Button color="laranjinha">Texto</Button>'))
        document.getElementById("roxo")?.addEventListener('click',useCliBoard('<Button color="roxo">Texto</Button>'))
        document.getElementById("roxinho")?.addEventListener('click',useCliBoard('<Button color="roxinho">Texto</Button>'))
        document.getElementById("vermelho")?.addEventListener('click',useCliBoard('<Button color="vermelho">Texto</Button>'))
        document.getElementById("vermelinho")?.addEventListener('click',useCliBoard('<Button color="vermelinho">Texto</Button>'))
        document.getElementById("cinza")?.addEventListener('click',useCliBoard('<Button color="cinza">Texto</Button>'))
        document.getElementById("cinzinha")?.addEventListener('click',useCliBoard('<Button color="cinzinha">Texto</Button>'))

        //Sizes

        document.getElementById("small")?.addEventListener('click',useCliBoard('<Button size="small">Texto</Button>'))
        document.getElementById("medium")?.addEventListener('click',useCliBoard('<Button>Texto</Button>'))
        document.getElementById("large")?.addEventListener('click',useCliBoard('<Button size="large">Texto</Button>'))

        //Variants

        document.getElementById("text")?.addEventListener('click',useCliBoard('<Button variant="text">Texto</Button>'))
        document.getElementById("contained")?.addEventListener('click',useCliBoard('<Button>Texto</Button>'))
        document.getElementById("outlined")?.addEventListener('click',useCliBoard('<Button variant="outlined">Texto</Button>'))


        //Icons

        document.getElementById("startIcon")?.addEventListener('click',useCliBoard('<Button startIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Pesquisar</Button>'))
        document.getElementById("endIcon")?.addEventListener('click',useCliBoard('<Button endIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Pesquisar</Button>'))

    },[])
}