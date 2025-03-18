import { Link } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';

function Cadastro(){
    return(
        <div className="cadastro">
            <Cabecalho/>
            <br />
            <form>
                <h1>Cadastro de Usuario</h1>
                <input placeholder="Nome"  name="Nome" type="text"/>
                <input placeholder="Idade"  name="Idade" type="number"/>
                <input placeholder="Email"  name="Email" type="email"/>
                <input placeholder="Senha"  name="Senha" type="password"/>
                <Link to='/login'>
                    <h2>
                        <button> Cadastrar </button> 
                    </h2>
                 </Link>
            </form>
            <Rodape/>
        </div>
    )
}
export default Cadastro;