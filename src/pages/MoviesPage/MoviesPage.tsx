import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { getMovies, searchMovies } from "../../services/moviesService";
import MovieList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import useDebouncer from "../../hooks/useDebouncer";
import { IMovie } from "../../models/movie";
import { ISearchResult } from "../../models/searchResult";
import { usePaginationContext } from "../../context/PaginationContext";

const MoviesPage: React.FC = () => {

    const { selectedPage } = usePaginationContext();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const searchHandler = (query: string):void => {
        setSearchQuery(query);
    }

    const debouncedSearch = useDebouncer(searchQuery, 1000);
    
    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
    }, []);
    
    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchMovies('/search/movie', debouncedSearch, selectedPage, setSearchResult);
        }
    }, [debouncedSearch, selectedPage])

    return(
        <>
        <div className="movies-page">
            <Searchbar placeholder="Search for a movie..." onSearch={searchHandler} />
            { !(debouncedSearch.length > 2) ? <MovieList movieList={movies}/> : <SearchResultList searchResult={searchResult} />}
        </div>
        </>
    );
}

export default MoviesPage;