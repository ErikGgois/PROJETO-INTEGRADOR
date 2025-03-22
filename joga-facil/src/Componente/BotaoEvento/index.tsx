import { useNavigate } from "react-router-dom";
import ListaEventos from "../ListaEventos";

function BotaoEvento(){
    const Navegacao =useNavigate();

    function handleEvento(){
        Navegacao('/CadastroEventos');

    }
    return(
        <div>
            <ListaEventos/>
            <button onClick={handleEvento}> VER EVENTO</button>
        </div>
    )

}
    
export default BotaoEvento;