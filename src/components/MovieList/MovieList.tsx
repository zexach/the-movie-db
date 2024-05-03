import React from "react";
import './MovieList.scss'
import { Movie } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";

type Props = {
    children?: React.ReactNode,
    movieList: Movie[]
}

const MovieList: React.FC<Props> = ({ movieList }) => {

    return(
        <>
        <div className="movie-list">
            { movieList ? movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />) : 'Error BZZZT!!!' }
        </div>
        </>
    );
}

export default MovieList;