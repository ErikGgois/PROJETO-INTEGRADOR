import { Link } from 'react-router-dom';
import '../../style/Style.css';
import { useContext } from 'react';
import { UsuarioLogadoContext } from '../../contexts/contexAuth';

function Cabecalho() {

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    function HandleClick() {
        UsuarioLogadoCtx?.setName("Usuario"); //futuramente puxar da API o nome do usuario
    }

    return(
        <div className="cabecalho">
        <div> <img className='Logocss' src="Logo.png" /> </div>
        <div className='LoginLink'><Link to='/login'><h2> <button onClick={HandleClick} className='BotaoLogin'> login </button>  </h2> </Link> </div>
       
        </div>
    )
}

export default Cabecalho