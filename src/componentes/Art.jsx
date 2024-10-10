import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  


const artPieces = [
    { id: 1, title: 'Futurista Olvidado', image: 'https://elcorso.es/wp-content/uploads/2014/11/Coleottero-veneziano-F.-Depero-e1416822337145.jpg' },
    { id: 2, title: 'Rasca Cielo y Tunel Depero', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQk01nrouHzqbkDElMcdiQ3tITqRL4x1QBQ&s' },
    { id: 3, title: 'Futurista y Global', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCaqyEzTwFUkiWq4JCGyNaoexb9VGEbdnFQ&s' },
];

function Art() {
    const { id } = useParams();  
    const navigate = useNavigate(); 
    const artId = parseInt(id);  
    const art = artPieces.find(piece => piece.id === artId);  
    const goToNextArt = () => {
        if (artId < artPieces.length) {
            navigate(`/art/${artId + 1}`);
        }
    };

    const goToPreviousArt = () => {
        if (artId > 1) {
            navigate(`/art/${artId - 1}`);
        }
    };

    return (
        <div>
            <h1>{art.title}</h1>
            <img src={art.image} alt={art.title} />
            <div>
                <button onClick={goToPreviousArt}>Anterior</button>
                <button onClick={goToNextArt}>Siguiente</button>
            </div>
            <button onClick={() => navigate('/home')}>Volver al Home</button>
        </div>
    );
}

export default Art;
