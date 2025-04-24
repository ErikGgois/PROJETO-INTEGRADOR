import '../../style/Style.css';

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
        <div>📍 Local: {local}</div>
        <div>Qtd Participantes: {numParticip}</div>
        <div>
          <button className="event-button">Participar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

// import '../../style/Style.css'

// type InfoCards ={
//     idCard?: number,
//     categoria: string,
//     data: string,
//     local: string,
//     numParticip: string;
// }

// function Card(informacoes: InfoCards) {
//     return(
//         <div>

//             <div className="event-card">
//                 {informacoes.categoria === 'Voley' &&
//                    <div>
//                     <img className='card-img' src="voley.jpg"  />
//                    </div>
//                 }

//                 {informacoes.categoria === 'Futebol' &&
//                    <div>
//                     <img className='card-img' src="futebol.jpg"  />
//                    </div>
//                 }

//                 {informacoes.categoria === 'Tenis' &&
//                    <div>
//                     <img className='card-img' src="tenis.jpg"  />
//                    </div>
//                 }
//                 {informacoes.categoria === 'Badminton' &&
//                    <div>
//                     <img className='card-img' src="badminton.jpg"  />
//                    </div>
//                 }
//                 {informacoes.categoria === 'Rugby' &&
//                    <div>
//                     <img className='card-img' src="rugby.jpg"  />
//                    </div>
//                 }
//                 {informacoes.categoria === 'Basebol' &&
//                    <div>
//                     <img className='card-img' src="baseball.jpg"  />
//                    </div>
//                 }
                
                                 
//                 <div>Categoria: {informacoes.categoria}</div>
//                 <div>📅 Data: {informacoes.data}</div>
//                 <div>📍 Local: {informacoes.local} </div>
//                 <div>Qtd Participantes: {informacoes.numParticip} </div>
//                 <div><button className='event-button'> Participar </button></div>
//             </div>

//         </div>
//     )
// }

// export default Card;
