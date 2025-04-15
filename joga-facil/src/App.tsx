import './style/Style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Eventos from './Paginas/Eventos';
import CadastroEventos from './Paginas/CadastroEventos';
import { UsuarioLogadoProvider } from './contexts/contexAuth';


function App() {
  return (
    <UsuarioLogadoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path='CadastroEventos' element={<CadastroEventos />} />
      </Routes>
    </UsuarioLogadoProvider>
  )
}

export default App