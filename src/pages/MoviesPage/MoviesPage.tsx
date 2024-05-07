import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import ItemList from "../../components/item/ItemList/ItemList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import { IMedia } from "../../models/media";
import { ISearchResult } from "../../models/searchResult";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";
import { getMovies, searchMovies } from "../../services/moviesService";
import useDebouncer from "../../hooks/useDebouncer";

const MoviesPage: React.FC = () => {

    const { selectedPage, setSelectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [movies, setMovies] = useState<IMedia[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    const debouncedSearch = useDebouncer(searchQuery, 1000);
    
    useEffect(() => {
        getMovies('/movie/top_rated', setMovies);
        setSelectedPage(1);
    }, []);
    
    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchMovies('/search/movie', debouncedSearch, selectedPage, setSearchResult);
        }
    }, [debouncedSearch, selectedPage])

    return(
        <>
        <div className="movies-page">
            <Searchbar placeholder="Search for a movie..." />
            { !(debouncedSearch.length > 2) ? <ItemList itemList={movies}/> : <SearchResultList searchResult={searchResult} />}
        </div>
        </>
    );
}

export default MoviesPage;