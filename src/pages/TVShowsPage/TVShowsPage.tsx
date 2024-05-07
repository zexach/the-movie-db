import React, { useState, useEffect } from "react";
import './TVShowsPage.scss'
import Searchbar from "../../components/Searchbar/Searchbar";
import ItemList from "../../components/item/ItemList/ItemList";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import { ISearchResult } from "../../models/searchResult";
import { IMedia } from "../../models/media";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";
import { getTVShows, searchTVShows } from "../../services/tvShowsService";
import useDebouncer from "../../hooks/useDebouncer";

const TVShowsPage: React.FC = () => {

    const { selectedPage, setSelectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [tvShows, setTvShows] = useState<IMedia[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    const debouncedSearch = useDebouncer(searchQuery, 1000);

    useEffect(() => {
        getTVShows('/tv/top_rated', setTvShows);
    }, []);

    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchTVShows('/search/tv', debouncedSearch, selectedPage, setSearchResult);
        }
    }, [debouncedSearch, selectedPage])

    return(
        <>
        <div className="tvshows-page">
            <Searchbar placeholder="Search for a tv show..." />
            { !(debouncedSearch.length > 2) ? <ItemList itemList={tvShows} /> : <SearchResultList searchResult={searchResult} /> }
        </div>
        </>
    );
}

export default TVShowsPage;