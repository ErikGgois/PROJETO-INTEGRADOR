import Style from "../../style/Style.css";


function ListaEventos() {
    let  eventos = [
        { evento: "Futebol", data: "10/08", local: "Campinho" },
        { evento: "Vôlei", data: "08/07", local: "BTC" },
        { evento: "Futebol Americano", data: "08/04", local: "Campo" }
    ];

    return (
        <ul className="eventos-container" >
            {eventos.map(
                (eventoAtual, indexAtual) => (
                <li key={indexAtual} className="evento-card">
                    <div>
                        evento: {eventoAtual.evento} <br />
                        data: {eventoAtual.data} <br />
                        local: {eventoAtual.local} <br />
                    </div>
                </li>
                
                
            ))}
        </ul>
        
    );
    
    
}
export default ListaEventos;