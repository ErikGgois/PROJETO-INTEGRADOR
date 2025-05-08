import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cabecalho from "../Componente/Cabecalho";
import { api } from "../api";
import "../style/Style.css"

function Eventos() {
    const navigate = useNavigate();

    const [descricao, setDescricao] = useState('');
    const [nomeEvento, setNomeEvento] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [local, setLocal] = useState('');
    const [esporte, setEsporte] = useState('');

    const esportes = ['Futebol', 'Vôlei', 'Basquete', 'Tênis',];

    const handleCriarEvento = async (e: React.FormEvent) => {
        e.preventDefault();

        const novoEvento = {
            data,
            horario,
            local,
            esporte,
            descricao
        };

        try {
            const response = await api.criarEvento(novoEvento);

            if (response.status) {
                alert('Evento criado com sucesso!');
                navigate('/eventos');
            } else {
                alert('Erro ao criar evento: ' + response.message);
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
                <input
                    placeholder="Horário"
                    type="time"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                />
                <input
                    placeholder="Local"
                    type="text"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                />

<div className="esporte-container">
    <label className="esporte-label"><h6 style={{ color: "white" }}>Escolha o esporte:</h6></label>
    {esportes.map((item) => (
        <button
            key={item}
            type="button"
            onClick={() => setEsporte(item)}
            className={`botao-esporte ${esporte === item ? 'selecionado' : ''}`}
        >
            {item}
        </button>
    ))}      
     
     <textarea
    placeholder="Descrição do evento"
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
    className="input-descricao"
/>

            
</div>
 
                <button type="submit" className="botao-criar-evento">Criar Evento</button>


                <h5><Link to='/'>Voltar</Link></h5>
            </div>
        </div>
    );
}

export default Eventos;