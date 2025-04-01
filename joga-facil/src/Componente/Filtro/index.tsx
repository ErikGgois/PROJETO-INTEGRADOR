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

                <option value="todos">Esporte</option>

                <option value="frutas">Data</option>

                <option value="verduras">Hora</option>

                <option value="laticinios">Local</option>

            </select>

        </div><div id="itens">

            </div></>
    );
}

export default Filtro;
