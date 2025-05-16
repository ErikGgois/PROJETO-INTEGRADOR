import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"
import { UsuarioLogadoContext } from "../../contexts/contexAuth";

function OffCanvas (){
    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    const navigate = useNavigate();
   
    function logoff() {
      if (UsuarioLogadoCtx?.name)
        UsuarioLogadoCtx.setName('');
        navigate('/');
    }
   
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleOffcanvas = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div>
            <Button color="primary"onClick={toggleOffcanvas}>
                    Logar
            </Button>
            <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end">
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    <p>Bem vindo! {UsuarioLogadoCtx?.name}</p>
                </OffcanvasHeader>
                <OffcanvasBody>
                <strong>
                    <a>Meus eventos</a>
                    <br />
                    <button onClick={logoff}>Sair</button>
                </strong>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default OffCanvas