import { useEffect, useState } from 'react';
import Card from '../../components/CardPiloto';

function Pilotos() {

    const [campeonatos1, setCampeonatos1] = useState([]);

    useEffect(() => {
        const buscarCampeonatos = async () => {
            const response = await fetch('./pilotos.json');
            const data = await response.json();

            data.map(element => {
                if (element.campeonato === "ultimatedrift") {
                    console.log(element);
                    const pilotosComImagens = element.pilotos.map(piloto => {
                        // Verifica se a imagem .png existe, se não, usa .jpg
                        const imgPng = `/img/${piloto.img}.png`;
                        const imgJpg = `/img/${piloto.img}.jpg`;

                        return {
                            ...piloto,
                            img: imgPng,  // Inicialmente tenta com .png
                            imgFallback: imgJpg // Fallback para .jpg
                        };
                    });
                    setCampeonatos1(pilotosComImagens);
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
                {campeonatos1.map(dados => (
                    <Card 
                        key={dados.piloto}
                        nome={dados.piloto}
                        idade={dados.age}
                        pais={dados.country}
                        car={dados.car}
                        img={dados.img}  // Passa o caminho da imagem .png
                        imgFallback={dados.imgFallback} // Passa o fallback .jpg
                    />
                ))}
            </ul>
        </>
    );
}

export default Pilotos;
