import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { getMovies, searchMovies } from "../../services/moviesService";
import { Movie } from "../../models/movie";
import MovieList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";

const MoviesPage: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchResult, setSearchResult] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

    const searchHandler = (query: string):void => {
        setSearchQuery(query);
    }
    
    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
    }, []);
    
    useEffect(() => {
        if (searchQuery.length > 2) {
            setIsSearchActive(true);
            searchMovies('/search/movie?query=', searchQuery, setSearchResult);
        } else {
            setIsSearchActive(false);
        }
    }, [searchQuery])

    return(
        <>
        <div className="movies-page">
            <Searchbar placeholder="Search for a movie..." onSearch={searchHandler} />
            { !isSearchActive ? <MovieList movieList={movies}/> : <SearchResultList searchResult={searchResult} /> }
        </div>
        </>
    );
}

export default MoviesPage;