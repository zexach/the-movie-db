import React from "react";
import './MovieCard.scss'
import { Movie } from "../../models/movie";
import { Link } from "react-router-dom";

type Props = {
    children?: React.ReactNode,
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {

    return(
        <>
        <Link to={movie.id.toString()}>
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-card" className="movie-card__img" />
                <div className="movie-card__details">
                    <p className="movie-card__details__title">{ movie.title.toUpperCase() }</p>
                    <div className="movie-card__details__sub">
                        <p className="movie-card__details__sub__info">
                            Rating <span className="movie-card__details__sub__info__span">{ movie.vote_average.toFixed(1) }</span>
                        </p>
                        <p className="movie-card__details__sub__info">
                            Production date <span className="movie-card__details__sub__info__span">{ movie.release_date.split('-').join('/') }</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default MovieCard;