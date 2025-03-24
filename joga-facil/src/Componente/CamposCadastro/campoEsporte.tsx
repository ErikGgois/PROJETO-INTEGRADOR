import { useState, SetStateAction } from "react";

function campoEsporte() {

const [text, Esporte ] = useState('')

 const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    Esporte(event.target.value)
 }

 return(
    <div className="cadastroEvento">
        <br />
        <input placeholder="Esporte" name="Esporte" onChange={handleChange} value={text} />
    </div>
 )
}

export default campoEsporte;