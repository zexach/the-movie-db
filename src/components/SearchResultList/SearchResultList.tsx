import React from "react";
import './SearchResultList.scss'
import { Movie } from "../../models/movie";
import SearchItem from "../SearchItem/SearchItem";
import NoResults from "../NoResults/Noresults";

type Props = {
    children?: React.ReactNode;
    searchResult: Movie[];
}

const SearchResultList: React.FC<Props> = ({ searchResult }) => {

    return(
        <>
        <div className="search-result-list">
            { searchResult ? 
                searchResult.length > 0 ? 
                    searchResult.map((movie) => <SearchItem key={movie.id} movie={movie} />) : <NoResults message="No movies were found" />
                : 'ERROR BZZZT!!!' }
        </div>
        </>
    );
}

export default SearchResultList;