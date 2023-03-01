import Button from "@ui/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useCliBoard from "@/stories/hooks/useClipboard";
import useClips from "@/stories/atoms/Button/useClips";

const MuiButton:any = Button

const css = {

}

const ButtonDoc=()=>{

    useClips()

    return (
        <div>
            <h4 style={{fontFamily:"Roboto",marginBottom:"8px",color:"#707070BF",fontSize:'12px',letterSpacing:'0.6px'}}>Clique para copiar o código</h4>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Cores</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiButton id="primary">Primary</MuiButton>
                <MuiButton id="laranjinha" color="laranjinha">Laranjinha</MuiButton>
                <MuiButton id="roxo" color="roxo">Roxo</MuiButton>
                <MuiButton id="roxinho" color="roxinho">Roxinho</MuiButton>
                <MuiButton id="vermelho" color="vermelho">Vermelho</MuiButton>
                <MuiButton id="vermelinho" color="vermelinho">Vermelinho</MuiButton>
                <MuiButton id="cinza" color="cinza">Cinza</MuiButton>
                <MuiButton id="cinzinha" color="cinzinha">Cinzinha</MuiButton>
            </div>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Tamanhos</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiButton id="small" size="small">Small</MuiButton>
                <MuiButton id="medium">Medium - Padrão</MuiButton>
                <MuiButton id="large" size="large">Large</MuiButton>
            </div>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Variantes</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiButton id="text" variant="text">Text</MuiButton>
                <MuiButton id="contained" variant="contained">Contained</MuiButton>
                <MuiButton id="outlined" variant="outlined">Outlined</MuiButton>
            </div>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Icones</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiButton id="startIcon" startIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Pesquisar</MuiButton>
                <MuiButton id="endIcon" endIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Pesquisar</MuiButton>
            </div>
        </div>
    )
}

export default ButtonDoc as any