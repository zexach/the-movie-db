import React from "react";
import './SearchResultList.scss'
import SearchItem from "../SearchItem/SearchItem";
import NoResults from "../NoResults/Noresults";
import Pagination from "../Pagination/Pagination";
import { ISearchResult } from "../../models/searchResult";

type Props = {
    children?: React.ReactNode;
    searchResult: ISearchResult | undefined;
}

const SearchResultList: React.FC<Props> = ({ searchResult }) => {

    return(
        <>
        <div className="search-result-list">
            { searchResult ? 
                searchResult.results.length > 0 ? 
                    searchResult.results.map((movie) => <SearchItem key={movie.id} movie={movie} />) : <NoResults message="No movies were found" />
                : <NoResults message="Loading..." /> }
            { searchResult && searchResult.results.length > 0 ? 
                <Pagination total_pages={searchResult?.total_pages} current_page={searchResult?.page} /> : '' }
        </div>
        </>
    );
}

export default SearchResultList;