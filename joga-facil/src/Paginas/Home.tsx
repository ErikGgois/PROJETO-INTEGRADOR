import Cabecalho from "../Componente/Cabecalho";

import Card from "../Componente/Card";
import Filtro from "../Componente/Filtro";
import Rodape from "../Componente/Rodape";
import '../style/Style.css';
import { Link } from 'react-router-dom';
import { Eventos} from '../types/eventos'
import { useEffect, useState } from "react";
import { api } from "../api";

    
function Home() {


    const [eventos, setEventos] = useState<Eventos[]>([]);
    const [loading, setLoading] = useState(false);

    const carregarEventos = async () => {        
        setLoading(true);
        let json = await api.CarregarTodosEventos();      
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);        
        setEventos(dataArray);    
    }  


    useEffect( ()=> {
        carregarEventos();
    }, // primeiro parametro do effect é o que ele deve rodar.
        []  // Segundo parâmetro é quando deve rodar. // o Array vazio não permite executar mais de uma vez.
            // Essa tag vazia monitora QUANDO será executado o effect. Para monitorar uma const, basta colocar [age] [name] etc...
     )
 

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
                <Link to='/CadastroEventos' className='botao-estilo'>                   
                    Criar Evento
                        <br/>  
                        <br/>                  
                 </Link>
                 
            </div>            

            <div className="home-containerlista">
                {eventos.map((item, index) => (
                    <div>                                         
                        <Card categoria={item.IDCATEGORIA} data = {item.DATA} local = {item.LOCAL} numParticip = {item.QTDPARTICIPANTES} />
                    </div>                                
                    )
                )}              
            </div>
           
            <Rodape />
        </div>
    );
}

export default Home;