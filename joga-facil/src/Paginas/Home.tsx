import Cabecalho from "../Componente/Cabecalho";

import Card from "../Componente/Card";
import Filtro from "../Componente/Filtro";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';
import { Link } from 'react-router-dom';
import { Eventos} from '../types/eventos'
import { useState } from "react";

function RequisicoesTypesAsync(){

    const [eventos, setEventos] = useState<Evento[]>([]);

    const [loading, setLoading] = useState(false);

    const carregarEventos = async () => {

        setLoading(true)

        try{
            let response = await fetch("");
            let json = await response.json();

            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);

            setEventos(dataArray);
        } catch (erro) {
            setLoading(false);

            alert('Falha ao carregar os Eventos. Tente novamente mais tarde.')
            console.error(erro);
        }

    }
    }

function Home() {

    const Lista = [
        {categoria: 'Futebol',    data: '01/01/2025', local: 'Campo 1',               partic: '1/12'},
        {categoria: 'Voley',      data: '13/03/2025', local: 'Quadra Getulio Vargas', partic: '11/12'},
        {categoria: 'Tenis',      data: '25/05/2025', local: 'Sesc',                  partic: '1/2'},
        {categoria: 'Badminton',  data: '25/05/2025', local: 'Sesc',                  partic: '1/2'},
        {categoria: 'Rugby',      data: '25/05/2025', local: 'Sesc',                  partic: '1/2'},
        {categoria: 'Basebol',    data: '25/05/2025', local: 'Sesc',                  partic: '1/2'},
        
    ]

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
            {/* <ListaEventos/> */}

            <div className="home-containerlista">
                {Lista.map((item, index) => (
                    <div>                                         
                        <Card categoria={item.categoria} data = {item.data} local = {item.local} numParticip = {item.partic} />
                    </div>                                
                    )
                )}              
            </div>
            

           
            <Rodape />
        </div>
    );
}

export default Home;