import './style/Style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />

 
      
    </Routes>
  )
}

export default App