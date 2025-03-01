import Cabecalho from "../Componente/Cabecalho";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';

function Home() {
    return (
        <div>
            <Cabecalho />
            <div className="conteudo">
                <h1>Home</h1>
                <p>Esta é a página inicial do site</p>
            </div>
            <Rodape />
        </div>
    );
}

export default Home;