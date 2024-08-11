/*import { useEffect, useState } from 'react'

function Card() {

    const [ campeonatos, setCampeonatos ] = useState([])

    useEffect(() => {
        const buscarCampeonatos = async () => {
            const response = await fetch('./pilotos.json');
            const data = await response.json()
            setCampeonatos(data)
        }
        buscarCampeonatos()
    }, [])

    return (
        campeonatos.map( campeonato => 
            <section className={styles.card} key={campeonato.campeonato}>
                <div className={styles.linha} style={{'backgroundColor': campeonato.cor}}></div>
                <h2>GRUPO {campeonato.campeonato}</h2>
                <ul>
                    {
                        campeonato.pilotos.map( dados => {
                          return (
                            <li key={dados.piloto}>
                                <img src={`/bandeiras/${pais.imagem}.png`} alt={pais.selecao} />
                                {dados.age}
                            </li>
                            ) 
                        })
                    }
                </ul>
            </section>
        )
    )
}

export default ListaPilotos*/