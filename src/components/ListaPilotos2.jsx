import React from 'react';
import CardPiloto from './CardPiloto';

function ListaPilotos({ pilotos }) {
  return (
    <div>
      {pilotos.map((campeonato) => (
        <CardPiloto
          key={campeonato}
          campeonato={campeonato}
         
        />
      ))}
    </div>
  );
}

export default ListaPilotos;