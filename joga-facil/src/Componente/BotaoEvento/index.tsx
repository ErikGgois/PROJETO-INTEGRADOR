import { useNavigate } from "react-router-dom";
import ListaEventos from "../ListaEventos";

function BotaoEvento(){
    const Navegacao =useNavigate();

    function handleEvento(){
        Navegacao('/Eventos');

    }
    return(
        <div>
            <ListaEventos/>
            <button onClick={handleEvento}> VER EVENTO</button>
        </div>
    )

}
    
export default BotaoEvento;