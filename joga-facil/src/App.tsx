import './style/Style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Login from './Paginas/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
 
      
    </Routes>
  )
}

export default App