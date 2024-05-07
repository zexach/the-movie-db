import React from "react";
import './TVShowList.scss'
import { ITVShow } from "../../../models/tvShow";
import TVShowCard from "../TVShowCard/TVShowCard";
import NoResults from "../../NoResults/Noresults";

type Props = {
    children?: React.ReactNode;
    tvShows: ITVShow[];
}

const TVShowList: React.FC<Props> = ({ tvShows }) => {

    return(
        <>
        <div className="tvshow-list">
            { tvShows ? tvShows.map((tvShow) => <TVShowCard key={tvShow.id} tvShow={tvShow} />) : <NoResults message="No TV Shows were found" /> }
        </div>
        </>
    );
}

export default TVShowList;