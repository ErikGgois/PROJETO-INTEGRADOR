import { Link, useNavigate,useParams } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";

function Login() {

    return (
        <div className="ContainerPrincipal">

            <Cabecalho />
            <br />
            <form>
                <h1>Login</h1>
                
                
                <input placeholder="Email"  name="Email" type="email"/>
                <input placeholder="Senha"  name="Senha" type="password"/>
                <Link to='/'>
                    <h2>
                        <button> Logar </button> 
                    </h2>

                 </Link>


                 <div className="botao"><h4> Nao tem conta ? <Link to='/cadastro'> Cadastrar
                 </Link></h4></div>
            </form>
        </div>
    )
}

export default Login