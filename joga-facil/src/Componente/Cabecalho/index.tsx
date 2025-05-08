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
        <div className='LoginLink'><Link to='/login' className='botao-estilo'>
           Login
        </Link> </div>
       
        </div>
    )
}

export default Cabecalho