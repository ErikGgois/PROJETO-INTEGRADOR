import '../../style/Style.css';
import { Link } from 'react-router-dom';

type InfoCards = {
  idCard?: number;
  categoria: string;
  data: string;
  local: string;
  numParticip: string;
};

function Card({ categoria, data, local, numParticip }: InfoCards) {
  const imagensCategoria: { [key: string]: string } = {
    Voley: 'voley.jpg',
    Futebol: 'futebol.jpg',
    Tenis: 'tenis.jpg',
    Badminton: 'badminton.jpg',
    Rugby: 'rugby.jpg',
    Basebol: 'baseball.jpg',
  };

  const imagemSrc = imagensCategoria[categoria];

  return (
    <div>
      <div className="event-card">
        {imagemSrc && (
          <div>
            <img className="card-img" src={imagemSrc} alt={categoria} />
          </div>
        )}

        <div>Categoria: {categoria}</div>
        <div>📅 Data: {data}</div>
        <div>📍 Local e horario: {local}</div>
        <div>Qtd Participantes: {numParticip}</div>
        <div>
          <Link to='/' className='estilobotao-detalhes'> Participar </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

