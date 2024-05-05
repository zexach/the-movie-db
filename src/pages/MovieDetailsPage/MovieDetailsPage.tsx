import React, { useEffect, useState } from "react";
import './MovieDetailsPage.scss'
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../../services/moviesService";
import { IDetailedMovie } from "../../models/detailedMovie";

const MovieDetailsPage: React.FC = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<IDetailedMovie | undefined>(undefined);

    useEffect(() => {
        if (id) {
            getSingleMovie('/movie', parseInt(id), setMovie)
        }
    }, [id]);

    return(
        <>
        <div className="movie-details-page">Movie id: {id}</div>
        </>
    );
}

export default MovieDetailsPage;