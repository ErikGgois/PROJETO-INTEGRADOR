import Cabecalho from "../Componente/Cabecalho";
import Rodape from "../Componente/Rodape";
import { useNavigate,useParams } from "react-router-dom";

function Login() {


    const LoginInicial = useParams();
    const navegacao = useNavigate();

    function HandleVoltar() {

        navegacao('/');
    }
    return (
        <div>
            <Cabecalho
                titulo="Joga-Fácil"
                descricao="login" />
            Faça seu login
            <Rodape />
            <br /><br />
            <button onClick={HandleVoltar} > VOLTAR</button>
        </div>
    )
}

export default Login