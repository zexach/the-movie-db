import React, { useEffect, useState } from "react";
import './MoviesPage.scss'
import { IMedia } from "../../models/media";
import { ISearchResult } from "../../models/searchResult";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";
import { getItems, searchItems } from "../../services/mediaService";
import { movieToMediaUtil } from "../../utils/movieToMediaUtill";
import ItemList from "../../components/item/ItemList/ItemList";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import useDebouncer from "../../hooks/useDebouncer";
import BackdropBackground from "../../components/details/BackdropBackground/BackdropBackground";
import WelcomeMessage from "../../components/details/WelcomeMessage/WelcomeMessage";

const MoviesPage: React.FC = () => {

    const { selectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [movies, setMovies] = useState<IMedia[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    const debouncedSearch = useDebouncer(searchQuery, 1000);
    
    useEffect(() => {
        getItems('/movie/top_rated', setMovies, movieToMediaUtil);
    }, []);
    
    useEffect(() => {
        if (debouncedSearch.length > 2) {
            searchItems('/search/movie', debouncedSearch, selectedPage, setSearchResult, movieToMediaUtil);
        }
    }, [debouncedSearch, selectedPage])

    return(
        <>
        <div className="movies-page">
            <BackdropBackground imagePath='/52oOtS4jYfSEIoXByyb3bEMVi9Z.jpg' />
            <div className="movies-page__welcome-section">
                <WelcomeMessage message="Step into the Enchanting Realm of Cinematic Adventures!" details="Millions of movies and tv shows to discover. Explore now." />
                <Searchbar placeholder="Search for a movie..." />
            </div>
            <div className="movies-page__movies-section">
                { !(debouncedSearch.length > 2) ? <ItemList itemList={movies}/> : <SearchResultList searchResult={searchResult} />}
            </div>
        </div>
        </>
    );
}

export default MoviesPage;