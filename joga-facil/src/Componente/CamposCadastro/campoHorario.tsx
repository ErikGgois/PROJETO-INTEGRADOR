import { useState, SetStateAction } from "react";

function campoHorario() {

const [text, Horario ] = useState('')

 const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    Horario(event.target.value)
 }

 return(
    <div className="cadastroEvento">
        <br />
        <input placeholder="Horario" name="Horario" onChange={handleChange} value={text} />
    </div>
 )
}

export default campoHorario;