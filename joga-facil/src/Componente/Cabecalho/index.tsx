import { Link } from 'react-router-dom';
import '../../style/Style.css';

function Cabecalho() {

    return(
        <div className="cabecalho">
        <div> <img className='Logocss' src="Logo.png" /> </div>
        <div className='LoginLink'><Link to='/login'><h2> <button className='BotaoLogin'>login </button>  </h2> </Link> </div>
       
        </div>
    )
}

export default Cabecalho