import React from "react";
import './MovieList.scss'
import { IMovie } from "../../../models/movie";
import NoResults from "../../NoResults/Noresults";
import MovieCard from "../MovieCard/MovieCard";

type Props = {
    children?: React.ReactNode,
    movieList: IMovie[]
}

const MovieList: React.FC<Props> = ({ movieList }) => {

    return(
        <>
        <div className="movie-list">
            { movieList ? movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />) : <NoResults message="No movies were found" /> }
        </div>
        </>
    );
}

export default MovieList;