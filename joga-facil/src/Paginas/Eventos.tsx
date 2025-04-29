import { useNavigate, } from "react-router-dom";
import '../style/Style.css';


function Eventos(){

    const navegacao = useNavigate();

    function HandleVoltar() {

        navegacao('/Eventos');
    }

    return(
    <div className="ContainerPrincipal">
        {/* aqui tem que ter as informações do evento, local, data, participantes e etc. */}
        <button onClick={HandleVoltar} > Participar do evento </button>
    </div>
    )
}

export default Eventos