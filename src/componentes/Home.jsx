import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Bienvenido a la Galería de Artes Futurista</h1>
            <Link to={"/art/1/"}>
                <button>Ver primera obra de Arte</button>
            </Link>
        </>
    );
}

export default Home;
