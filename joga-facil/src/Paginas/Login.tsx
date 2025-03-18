import { Link, useNavigate,useParams } from "react-router-dom";

function Login() {


    const LoginInicial = useParams();
    const navegacao = useNavigate();

    function HandleVoltar() {

        navegacao('/');
    }
    return (
        <div className="ContainerPrincipal">
            <h1>Colocar area de login de email e senha em seguida botão de logar ja realizado.</h1>

            <hr />

            <button onClick={HandleVoltar} > Logar </button>

            <div className='CadastroUsuario'>
                <Link to='/cadastro'>
                    <h2>
                        <button> Cadastrar </button> 
                    </h2>
                 </Link>
            </div>
        </div>
    )
}

export default Login