import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import { api } from "../api";
import "../style/Style.css"

function Eventos() {
    const navigate = useNavigate();

    
    const [nomeEvento, setNomeEvento] = useState('');
    const [data, setData] = useState('');
    // const [horario, setHorario] = useState('');
    const [local, setLocal] = useState('');
    const [participantes, setParticipantes] = useState('');
   

 

    const handleCriarEvento = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.criarEvento(nomeEvento, data, local, participantes);

            if (response.status) {
                alert('Evento criado com sucesso!');
                navigate('/');
            } else {
                alert('' + response.message);
                navigate('/');
            }
        } catch (error) {
            alert('Erro na requisição: ' + error);
        }
    };

    return (
        <div className="ContainerPrincipal">
            <Cabecalho />
            <br />
            <div className="form-eventos">
                <h1 style={{ color: "white" }}>Criar Evento</h1>

                <input
                    placeholder="Nome do evento"
                    type="text"
                    value={nomeEvento}
                    onChange={(e) => setNomeEvento(e.target.value)}
                />
                <input
                    placeholder="Data (ex: 2025-05-15)"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                {/* <input
                    placeholder="Horário"
                    type="time"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                /> */}
                <input
                    placeholder="Local e horario"
                    type="text"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                />
                <input
                    placeholder="Quantidade de participantes"
                    type="number"
                    value={participantes}
                    onChange={(e) => setParticipantes(e.target.value)}
                />



            
</div>
 
                <button type="submit" className="botao-estilo" onClick={handleCriarEvento} >Criar Evento</button>


                <h5><Link to='/'>Voltar</Link></h5>
            </div>
      
    );
}

export default Eventos;