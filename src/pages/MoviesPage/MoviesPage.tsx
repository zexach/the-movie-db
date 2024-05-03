import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { getMovies } from "../../services/moviesService";
import { Movie } from "../../models/movie";
import MovieList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/Searchbar/Searchbar";

const MoviesPage: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
    }, []);

    return(
        <>
        <div className="movies-page">
            <Searchbar placeholder="Search for a movie..." />
            <MovieList movieList={movies}/>
        </div>
        </>
    );
}

export default MoviesPage;