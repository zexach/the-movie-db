import React from "react";
import './MovieDetailsPage.scss'
import { useParams } from "react-router-dom";

const MovieDetailsPage: React.FC = () => {

    const { id } = useParams();

    return(
        <>
        <div className="movie-details-page">Movie id: {id}</div>
        </>
    );
}

export default MovieDetailsPage;