import { Link } from 'react-router-dom';
import '../../style/Style.css';

function Cabecalho() {

    return(
        <div className="cabecalho">
        <div className='Logo'><a href=''></a></div>
        <div className='LoginLink'><Link to='/login'><h2> <button className='BotaoLogin'>login </button>  </h2> </Link> </div>
        <div className='CadastroJogo'><Link to='/eventos'> <h2> <button>cadastre seu Jogo </button> </h2></Link></div>
        </div>
    )
}

export default Cabecalho