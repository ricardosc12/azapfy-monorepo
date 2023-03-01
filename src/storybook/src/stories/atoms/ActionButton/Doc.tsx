import Button from "@ui/atoms/Button";
import ActionButton from "@ui/atoms/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useClips from "@/stories/atoms/ActionButton/useClips";

const MuiActionButton:any = ActionButton

const ActionButtonDoc=()=>{

    useClips()

    return (
        <div>
            <h4 style={{fontFamily:"Roboto",marginBottom:"8px",color:"#707070BF",fontSize:'12px',letterSpacing:'0.6px'}}>Clique para copiar o código</h4>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Cores</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiActionButton id="primary"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="laranjinha" color="laranjinha"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="roxo" color="roxo"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="roxinho" color="roxinho"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="vermelho" color="vermelho"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="vermelinho" color="vermelinho"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="cinza" color="cinza"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="cinzinha" color="cinzinha"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
            </div>

            <h2 style={{fontFamily:"Roboto",marginBottom:"12px"}}>Tamanhos</h2>

            <div style={{display:'flex', alignItems:"center", gridGap:12, marginBottom:'30px'}}>
                <MuiActionButton id="small" size="small"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="medium"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
                <MuiActionButton id="large" size="large"><FontAwesomeIcon icon={faMagnifyingGlass}/></MuiActionButton>
            </div>
        </div>
    )
}

export default ActionButtonDoc as any