import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { IMedia } from "../../models/media";
import { ISearchResult } from "../../models/searchResult";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";
import { getItems, searchItems } from "../../services/mediaService";
import { movieToMediaUtil } from "../../utils/movieToMediaUtill";
import useDebouncer from "../../hooks/useDebouncer";
import ItemList from "../../components/item/ItemList/ItemList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";

const MoviesPage: React.FC = () => {

    const { selectedPage, setSelectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [movies, setMovies] = useState<IMedia[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    const debouncedSearch = useDebouncer(searchQuery, 1000);
    
    useEffect(() => {
        getItems('/movie/top_rated', setMovies, movieToMediaUtil);
        setSelectedPage(1);
    }, []);
    
    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchItems('/search/movie', debouncedSearch, selectedPage, setSearchResult, movieToMediaUtil);
        }
    }, [debouncedSearch, selectedPage, setSelectedPage])

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