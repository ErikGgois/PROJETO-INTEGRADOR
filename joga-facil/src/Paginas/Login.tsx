import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import { ChangeEvent, useContext, useState } from "react";
import { api } from "../api";
import { UsuarioLogadoContext } from "../contexts/contexAuth";





function Login() {


    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const RealizarLogin = async () => {
        {
            //metodo para buscar na API o login e senha informados pelo usuario.

            let json = await api.Logar(fUser, fSenha);
            
              Navigate('/');

            if (json.status) {
                alert('bem vindo,' + fUser);
                // UsuarioLogadoCtx?.setName(json.usuario);

                Navigate('/');
            } else {
                alert(json.message);
                alert('Usuario ou senha incorretos');
            }
            
        }
    }

    const [fUser, setAddEmail] = useState('');
    const HandleAddEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddEmail(e.target.value)}


    const [fSenha, setAddSenha] = useState('');
    const HandleAddSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddSenha(e.target.value)}


    const Navigate = useNavigate();


    return (
        <div className="ContainerPrincipal">

            <Cabecalho />
            <br />
            <div className="Loginestilo"> 
                <h1>Login</h1>


                <input placeholder="Email" name="Email" type="email" onChange={HandleAddEmailChange} />
                <input placeholder="Senha" name="Senha" type="password" onChange={HandleAddSenhaChange} />
        
                    <button onClick={RealizarLogin}> Logar </button> {/* esta faltando exibir conteudo condicional para aparecer o nome do usuario logado */}

                <h3 style={{ color: "white" }}>Não tem conta?</h3>
                <h5><Link to='/cadastro'> Cadastrar
                </Link>
                </h5>
                </div>
        </div>
    )
}

export default Login