import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { getMovies } from "../../services/moviesService";
import { Movie } from "../../models/movie";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
    }, []);

    return(
        <>
        <div className="movies-page">
            <MovieList movieList={movies}/>
        </div>
        </>
    );
}

export default MoviesPage;