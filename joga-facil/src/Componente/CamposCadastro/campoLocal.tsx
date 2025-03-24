import { useState, SetStateAction } from "react";

function campoLocal() {

const [text, Local ] = useState('')

 const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    Local(event.target.value)
 }

 return(
    <div className="cadastroEvento">
        <br />
        <input placeholder="Local" name="Local" onChange={handleChange} value={text} />
    </div>
 )
}

export default campoLocal;