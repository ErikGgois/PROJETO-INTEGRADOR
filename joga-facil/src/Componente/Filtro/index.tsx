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
      <label htmlFor="local"></label>
      <select id="local" name="local" defaultValue="">
        <option value="" disabled>Escolha um local</option>
        {locais.map((local) => (
          <option key={local} value={local}>{local}</option>
        ))}
      </select>

      <button
        type="button"
        onClick={aplicarFiltros}
        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Filtrar
      </button>
    </div>
  );
}







// modelo atigo do codigo que o Giovanne fez

//   //function Filtro() {
//     const [showCalendar, setShowCalendar] = useState(false);
//     const [selectedDate, setSelectedDate] = useState("");

//     const [showTimePicker, setShowTimePicker] = useState(false);
//     const [selectedTime, setSelectedTime] = useState("");

//     return (
//         <div>
//             <label htmlFor="filtro"></label>
//             <select id="filtro" defaultValue="">
//                 <option value="" disabled>Esportes</option>
//                 <option value="Futebol">Futebol</option>
//                 <option value="Vôlei">Vôlei</option>
//                 <option value="Beach Tênis">Beach Tênis</option>
//                 <option value="Basquete">Basquete</option>
//                 <option value="Outros">Outros</option>
//             </select>

//             <button onClick={() => setShowCalendar(!showCalendar)}>
//                 {selectedDate ? selectedDate : "Data"}
//             </button>

//             {showCalendar && (
//                 <input
//                     type="date"
//                     onChange={(e) => {
//                         setSelectedDate(e.target.value);
//                         setShowCalendar(false);
//                     }}
//                 />
//             )}

// <button onClick={() => setShowTimePicker(!showTimePicker)}>
//                 {selectedTime ? selectedTime : "Hora"}
//             </button>

//             {showTimePicker && (
//                 <input
//                     type="time"
//                     onChange={(e) => {
//                         setSelectedTime(e.target.value);
//                         setShowTimePicker(false);
//                     }}
//                 />
//             )}

// <label htmlFor="filtro"></label>
//             <select id="filtro" defaultValue="">
//                 <option value="" disabled>Local</option>
//                 <option value="Futebol">Bauru</option>
//                 <option value="Vôlei">Curitiba</option>
//                 <option value="Beach Tênis">São Paulo</option>
//                 <option value="Basquete">Japao</option>
//                 <option value="Outros">Outros</option>
//             </select>

//         </div>
//     );
// }

export default Filtro;
