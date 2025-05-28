import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'reactstrap';
import '../../style/Style.css';
import { UsuarioLogadoContext } from '../../contexts/contexAuth';

function Cabecalho() {
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function handleClick() {
        UsuarioLogadoCtx?.setName("Usuário");
        toggle();
    }

    return (
        <div className="cabecalho">
            <div>
            <Link to='/'> <img className='Logocss' src="Logo.png" alt="Logo" /> </Link>
            </div>
            <div className='LoginLink'>
                {!UsuarioLogadoCtx?.name ? (<Link to='/login' className='botao-estilo'>Login</Link>) : (
                    <>
                        <span onClick={toggle} style={{ cursor: 'pointer' }}>
                            {UsuarioLogadoCtx.name}
                        </span>
                        <Offcanvas isOpen={isOpen} toggle={toggle}>
                            <div className="p-3">
                                <h5>Bem-vindo, {UsuarioLogadoCtx.name}</h5>
                                {/* Adicione aqui outros itens, como botão de logout */}
                            </div>
                        </Offcanvas>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cabecalho;
