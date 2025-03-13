import Cabecalho from "../Componente/Cabecalho";
import ListaEventos from "../Componente/ListaEventos";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';

function Home() {
    return (
        <div className="ContainerPrincipal"> 
            <Cabecalho />
            <div className="conteudo">
                <h1>Home</h1>
                <p>Esta é a página inicial do site</p>
            </div>
            <ListaEventos/>
            <Rodape />
        </div>
    );
}

export default Home;