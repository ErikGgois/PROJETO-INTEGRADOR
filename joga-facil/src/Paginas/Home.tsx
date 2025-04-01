import Cabecalho from "../Componente/Cabecalho";
import Filtro from "../Componente/Filtro";
import ListaEventos from "../Componente/ListaEventos";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="ContainerPrincipal"> 
            <Cabecalho />
            <Filtro />
            <div className='CadastroJogo'>
                <Link to='/CadastroEventos'>
                    <h2>
                        <button> Criar Evento </button> 
                    </h2>
                 </Link>
            </div>
            <ListaEventos/>
           
            <Rodape />
        </div>
    );
}

export default Home;