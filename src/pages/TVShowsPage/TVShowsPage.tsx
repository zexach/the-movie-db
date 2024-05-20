import React, { useState, useEffect } from "react";
import './TVShowsPage.scss'
import { ISearchResult } from "../../models/searchResult";
import { IMedia } from "../../models/media";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";
import { getItems, searchItems } from "../../services/mediaService";
import { tvShowToMediaUtil } from "../../utils/tvShowToMediaUtil";
import useDebouncer from "../../hooks/useDebouncer";
import Searchbar from "../../components/Searchbar/Searchbar";
import ItemList from "../../components/item/ItemList/ItemList";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import WelcomeMessage from "../../components/details/WelcomeMessage/WelcomeMessage";
import BackdropBackground from "../../components/details/BackdropBackground/BackdropBackground";

const TVShowsPage: React.FC = () => {

    const { selectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [tvShows, setTvShows] = useState<IMedia[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    const debouncedSearch = useDebouncer(searchQuery, 1000);

    useEffect(() => {
        getItems('/tv/top_rated', setTvShows, tvShowToMediaUtil);
    }, []);

    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchItems('/search/tv', debouncedSearch, selectedPage, setSearchResult, tvShowToMediaUtil);
        }
    }, [debouncedSearch, selectedPage])

    return(
        <>
        <div className="tvshows-page">
            <BackdropBackground imagePath='/xJHokMbljvjADYdit5fK5VQsXEG.jpg' />
            <div className="tvshows-page__welcome-section">
                <WelcomeMessage message="Step into the Enchanting Realm of Cinematic Adventures!" details="Millions of movies and tv shows to discover. Explore now." />
                <Searchbar placeholder="Search for a tv show..." />
            </div>
            <div className="tvshows-page__shows-section">
                { !(debouncedSearch.length > 2) ? <ItemList itemList={tvShows} /> : <SearchResultList searchResult={searchResult} /> }
            </div>
        </div>
        </>
    );
}

export default TVShowsPage;