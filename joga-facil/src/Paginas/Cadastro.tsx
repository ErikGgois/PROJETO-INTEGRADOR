import { Link } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';
import { Usuarios } from "../types/usuarios";
import { useState } from "react";
import { api } from "../api";

  
function Cadastro(){

    const [nome, setNome]   = useState('');
    function ChangeNome(Event : React.ChangeEvent<HTMLInputElement>) {
        setNome(Event.target.value);
    }
    
    const [idade, setIdade] = useState('');
    function ChangeIdade(Event : React.ChangeEvent<HTMLInputElement>) {
        setIdade(Event.target.value);
    }

    const [email, setEmail] = useState('');
    function ChangeEmail(Event : React.ChangeEvent<HTMLInputElement>) {
        setEmail(Event.target.value);
    }

    const [senha, setSenha] = useState('');
    function ChangeSenha(Event : React.ChangeEvent<HTMLInputElement>) {
        setSenha(Event.target.value);
    }

        const criarUsuario = async () => {
    
            let json = await api.criarUsuario(nome, idade, email, senha); 
                
            if (json.id) {
                alert('Post Adicionado com sucesso!')                    
            } else {
                alert('Falha ao adicionar usuário')
            }                  
        }



    return(
        <div className="containerCadastro">
            <Cabecalho/>
            <br />
            <div className="cadastroestilo">
                <h1>Cadastro de Usuario</h1>
                <input placeholder="Nome"  name="Nome" type="text" onChange={ChangeNome}/>
                <input placeholder="Idade"  name="Idade" type="number" onChange={ChangeIdade}/>
                <input placeholder="Email"  name="Email" type="email" onChange={ChangeEmail} />
                <input placeholder="Senha"  name="Senha" type="password" onChange={ChangeSenha}/>
                <Link to='/login'>
                    
                        <button onClick={criarUsuario}> Cadastrar </button> 
                    
                 </Link>
            </div>
            <Rodape/>
        </div>
    )
}
export default Cadastro;