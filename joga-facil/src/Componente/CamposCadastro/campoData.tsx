import { useState, SetStateAction } from "react";

function campoData() {

const [text, Data ] = useState('')

 const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    Data(event.target.value)
 }

 return(
    <div className="cadastroEvento">
        Data
        <br />
        <input name="Data" onChange={handleChange} value={text} />
    </div>
 )
}

export default campoData;