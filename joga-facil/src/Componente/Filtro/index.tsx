import { useState } from "react";

function Filtro() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState("");

    return (
        <div>
            <label htmlFor="filtro"></label>
            <select id="filtro" defaultValue="">
                <option value="" disabled>Esportes</option>
                <option value="Futebol">Futebol</option>
                <option value="Vôlei">Vôlei</option>
                <option value="Beach Tênis">Beach Tênis</option>
                <option value="Basquete">Basquete</option>
                <option value="Outros">Outros</option>
            </select>

            <button onClick={() => setShowCalendar(!showCalendar)}>
                {selectedDate ? selectedDate : "Data"}
            </button>

            {showCalendar && (
                <input
                    type="date"
                    onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setShowCalendar(false);
                    }}
                />
            )}

<button onClick={() => setShowTimePicker(!showTimePicker)}>
                {selectedTime ? selectedTime : "Hora"}
            </button>

            {showTimePicker && (
                <input
                    type="time"
                    onChange={(e) => {
                        setSelectedTime(e.target.value);
                        setShowTimePicker(false);
                    }}
                />
            )}

<label htmlFor="filtro"></label>
            <select id="filtro" defaultValue="">
                <option value="" disabled>Local</option>
                <option value="Futebol">Bauru</option>
                <option value="Vôlei">Curitiba</option>
                <option value="Beach Tênis">São Paulo</option>
                <option value="Basquete">Japao</option>
                <option value="Outros">Outros</option>
            </select>

        </div>
    );
}

        // <div id="itens"> 
{/*         
<div className="item" data-categoria="Esporte">Futebol</div>
 
 <div className="item" data-categoria="Esporte">Volei</div>
  
 <div className="item" data-categoria="Esporte">Beach Tenis</div>
  
 <div className="item" data-categoria="Esporte">Ping Pong</div>
 
 <div className="item" data-categoria="Esporte">Basquete</div>

 <div className="item" data-categoria="Esporte">Ciclismo</div>

 <div className="item" data-categoria="Esporte">Yoga</div>

 <div className="item" data-categoria="Esporte">Crossfit</div>
  */}
{/* 
            </div></>
    );
} */}

export default Filtro;
