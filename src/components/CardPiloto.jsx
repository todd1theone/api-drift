import React, { useState } from 'react';

function CardPiloto({ idade, nome, pais, car, img, imgFallback }) {
    const [imgSrc, setImgSrc] = useState(img);

    const handleError = () => {
        if (imgFallback) {
            setImgSrc(imgFallback);
        }
    };

    return (
        <div style={styles.cardContainer}>
            <img 
                src={imgSrc} 
                alt={nome} 
                style={styles.image} 
                onError={handleError} 
            />
            <div style={styles.infoContainer}>
                <p style={styles.text}><strong>Nome:</strong> {nome}</p>
                <p style={styles.text}><strong>Idade:</strong> {idade}</p>
                <p style={styles.text}><strong>País:</strong> {pais}</p>
                <p style={styles.text}><strong>Carro:</strong> {car}</p>
            </div>
        </div>
    );
}

const styles = {
    cardContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
    },
    image: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginRight: '20px',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        margin: '5px 0',
        fontSize: '16px',
        color: 'white',
    },
};

export default CardPiloto;
