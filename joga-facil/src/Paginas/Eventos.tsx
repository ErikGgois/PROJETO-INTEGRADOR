import { useNavigate, } from "react-router-dom";
import '../style/Style.css';


function Eventos(){

    const navegacao = useNavigate();

    function HandleVoltar() {

        navegacao('/');
    }

    return(
    <div className="ContainerPrincipal">
        <button onClick={HandleVoltar} > Logar </button>
    </div>
    )
}

export default Eventos