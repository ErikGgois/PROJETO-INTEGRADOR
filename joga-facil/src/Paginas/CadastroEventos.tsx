import { useNavigate, } from "react-router-dom";
import '../style/Style.css';
import { SetStateAction, useState } from "react";
import Cabecalho from "../Componente/Cabecalho";
import CampoEsporte from "../Componente/CamposCadastro/campoEsporte";
import CampoParticipantes from "../Componente/CamposCadastro/campoParticipantes";
import CampoLocal from "../Componente/CamposCadastro/campoLocal";
import CampoData from "../Componente/CamposCadastro/campoData";
import CampoHorario from "../Componente/CamposCadastro/campoHorario";

function CadastroEventos(){

 return(
    <div className="cadastroEvento">
        <Cabecalho/>
        <br />
        <CampoEsporte/>
        <br />
        <CampoParticipantes/>
        <br />
        <CampoLocal/>
        <br />
        <CampoData/>
        <br />
        <CampoHorario/>

    </div>
 )

}

export default CadastroEventos;