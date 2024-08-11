import { useEffect, useState } from 'react';
import Card from '../../components/CardPiloto';

function Pilotos() {

  const [campeonatos1, setCampeonatos1] = useState([]);

  useEffect(() => {
    const buscarCampeonatos = async () => {
      const response = await fetch('./pilotos.json');
      const data = await response.json();
      setCampeonatos1(data);
    };

    buscarCampeonatos();
  }, []);

  return (
    campeonatos1.map(campeonato =>
      <section key={campeonato.campeonato}>
        <div style={{ 'backgroundColor': campeonato.cor }}></div>
        <h2 style={{ color: 'white', marginLeft: '40%' }}>GRUPO {campeonato.campeonato}</h2>
        <ul>
          {
            campeonato.pilotos.map(dados => {
              const imgPath = `/img/${dados.img}.png`; // Adjust the extension based on the actual image file

              return (
                <Card
                  key={dados.piloto}
                  nome={dados.piloto}
                  idade={dados.age}
                  pais={dados.country}
                  car={dados.car}
                  img={imgPath}
                />
              );
            })
          }
        </ul>
      </section>
    )
  );
}

export default Pilotos;
