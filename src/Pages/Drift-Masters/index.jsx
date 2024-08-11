import { useEffect, useState } from 'react';
import Card from '../../components/CardPiloto';

function Pilotos() {

    const [campeonatos1, setCampeonatos1] = useState([]);

    useEffect(() => {
        const buscarCampeonatos = async () => {
            const response = await fetch('./pilotos.json');
            const data = await response.json();
            
            data.map(element => {
                if (element.campeonato === "driftmaster") {
                    console.log(element);
                    setCampeonatos1(element.pilotos);
                } else {
                    console.log("outro");
                }
            });
        };
        buscarCampeonatos();
    }, []);

    return (
        <>
            <h2>GRUPO {"Ultimate Drift"}</h2>

            <ul>
                {campeonatos1.map(dados => {
                    // Construindo o caminho da imagem
                    const imgPath = `/img/${dados.img}.png`; // Ajuste a extensão conforme necessário

                    return (
                        <Card 
                            key={dados.piloto}
                            nome={dados.piloto}
                            idade={dados.age}
                            pais={dados.country}
                            car={dados.car}
                            img={imgPath}  // Passando a imagem como prop
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Pilotos;
