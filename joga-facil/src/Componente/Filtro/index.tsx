import { useState } from "react";

function Filtro() {
    const [procura, setProcura] = useState("");
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const items = ["Esporte", "Data", "Hora", "Local"];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(procura.toLowerCase())
    );

    return (
    <><div>

            <label htmlFor="filtro"></label>

            <select id="filtro">

                <option value="Esporte">Esporte</option>

                <option value="Data">Data</option>

                <option value="Hora">Hora</option>

                <option value="Local">Local</option>

            </select>

        </div><div id="itens">

            </div></>
    );
}

export default Filtro;
