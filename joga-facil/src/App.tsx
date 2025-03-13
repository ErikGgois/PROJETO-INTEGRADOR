import './style/Style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Login from './Paginas/Login';
import Eventos from './Paginas/Eventos';

function App() {
  return (
    <Routes>
      {/* <Route path='*' element={<NotFound/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/Eventos' element={<Eventos/>} />
    </Routes>
  )
}

export default App