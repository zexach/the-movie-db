import React, { useState, useEffect } from "react";
import './TVShowsPage.scss'
import Searchbar from "../../components/Searchbar/Searchbar";
import TVShowList from "../../components/tvShow/TVShowList/TVShowList";
import { getTVShows } from "../../services/tvShowsService";
import { ITVShow } from "../../models/tvShow";
import { ISearchResult } from "../../models/searchResult";
import { usePaginationContext } from "../../context/PaginationContext";
import { useSearchContext } from "../../context/SearchContext";

const TVShowsPage: React.FC = () => {

    const { selectedPage } = usePaginationContext();
    const { searchQuery } = useSearchContext();

    const [tvShows, setTvShows] = useState<ITVShow[]>([]);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>(undefined);

    useEffect(() => {
        getTVShows('/tv/top_rated', setTvShows);
    }, []);

    return(
        <>
        <div className="tvshows-page">
            <Searchbar placeholder="Search for a tv show..." />
            <TVShowList tvShows={tvShows} />
        </div>
        </>
    );
}

export default TVShowsPage;