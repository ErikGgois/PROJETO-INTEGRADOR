import { useState } from "react";
import '../../style/Style.css'

function Filtro() {
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);

  const esportes = ["Futebol", "Vôlei", "Beach Tênis", "Basquete", "Outros"];
  const locais = ["digite o local"];

  function aplicarFiltros(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="filtro-container">
      {/* Filtro de Esporte */}
      <label htmlFor="esporte"></label>
      <select id="esporte" name="esporte" defaultValue="">
        <option value="" disabled>Escolha um esporte</option>
        {esportes.map((esporte) => (
          <option key={esporte} value={esporte}>{esporte}</option>
        ))}
      </select>

      {/* Filtro de Data */}
      <button type="button" onClick={() => setShowCalendar(!showCalendar)}>
        {selectedDate || "Selecionar Data"}
      </button>
      {showCalendar && (
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setShowCalendar(false);
          }}
        />
      )}

      {/* Filtro de Hora */}
      <button type="button" onClick={() => setShowTimePicker(!showTimePicker)}>
        {selectedTime || "Selecionar Hora"}
      </button>
      {showTimePicker && (
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => {
            setSelectedTime(e.target.value);
            setShowTimePicker(false);
          }}
        />
      )}

      {/* Filtro de Local */}
<label htmlFor="local">Escolha um local:</label>
<input list="locais" id="local" name="local" />

<datalist id="locais">
  {locais.map((local) => (
    <option key={local} value={local} />
  ))}
</datalist>

      <button
        type="button"
        onClick={aplicarFiltros}
        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Filtrar
      </button>
//     </div>
  );
}



export default Filtro;


