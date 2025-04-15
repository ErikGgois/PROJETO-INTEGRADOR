import { Link, Navigate, useNavigate,useParams } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import { useContext, useState } from "react";
import {api} from "../api";
import { UsuarioLogadoContext } from "../contexts/contexAuth";




function Login() {

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    function HandleClick() {
        UsuarioLogadoCtx?.setName("Usuario"); //futuramente puxar da API o nome do usuario
    }

    const [fUser, setFUser] = useState('');
    const [fSenha, setFSenha] = useState('');
    const Navigate = useNavigate();
  

    const RealizarLogin = async () => {
        {
            //metodo para buscar na API o login e senha informados pelo usuario.
            let json = await api.Logar(fUser, fSenha);
    
            if (json.status) {
                alert('bem vindo,' + fUser);
               // UsuarioLogadoCtx?.setName(json.usuario);
    
                Navigate('/home');
            }else {
                alert(json.message);
            }
        }
    }
    

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
                        <button onClick={HandleClick}> Logar </button> {/* esta faltando exibir conteudo condicional para aparecer o nome do usuario logado */}                       
                    </h2>

                 </Link>


                 <h4> Nao tem conta ? <Link to='/cadastro'> Cadastrar
                 </Link></h4>
            </form>
        </div>
    )
}

export default Login