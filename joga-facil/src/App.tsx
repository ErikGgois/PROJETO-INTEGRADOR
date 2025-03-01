import './style/Style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';

function App() {
  return (
    <Routes>
      {/* <Route path='*' element={<NotFound/>} /> */}
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App