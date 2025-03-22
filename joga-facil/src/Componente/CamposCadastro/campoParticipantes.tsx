import { useState, SetStateAction } from "react";

function campoParticipantes() {

const [text, Participantes ] = useState('')

 const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    Participantes(event.target.value)
 }

 return(
    <div className="cadastroEvento">
        Participantes
        <br />
        <input name="Participantes" onChange={handleChange} value={text} />
    </div>
 )
}

export default campoParticipantes;