import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { getMovies, searchMovies } from "../../services/moviesService";
import { Movie } from "../../models/movie";
import MovieList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import useDebouncer from "../../hooks/useDebouncer";

const MoviesPage: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchResult, setSearchResult] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

    const searchHandler = (query: string):void => {
        setSearchQuery(query);
    }

    const debouncedSearch = useDebouncer(searchQuery, 1000);
    
    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
    }, []);
    
    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchMovies('/search/movie', debouncedSearch, 1, setSearchResult);
        }
    }, [debouncedSearch])

    return(
        <>
        <div className="movies-page">
            <Searchbar placeholder="Search for a movie..." onSearch={searchHandler} />
            { !(debouncedSearch.length > 2) ? <MovieList movieList={movies}/> : <SearchResultList searchResult={searchResult} /> }
        </div>
        </>
    );
}

export default MoviesPage;