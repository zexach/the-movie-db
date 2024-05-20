import React, { useEffect, useState } from "react";
import './TVShowDetailsPage.scss'
import { useParams } from "react-router-dom";
import { getSingleMedia, getTrailer } from "../../services/mediaService";
import { IDetailedShow } from "../../models/detailedShow";
import { IVideo } from "../../models/video";
import BackdropBackground from "../../components/details/BackdropBackground/BackdropBackground";
import BackButton from "../../components/details/BackButton/BackButton";
import BackdropImage from "../../components/details/BackdropImage/BackdropImage";
import TrailerVideo from "../../components/details/TrailerVideo/TrailerVideo";
import PosterImage from "../../components/details/PosterImage/PosterImage";
import Title from "../../components/details/Title/Title";
import Overview from "../../components/details/Overview/Overview";
import Genres from "../../components/details/Genres/Genres";
import Loader from "../../components/Loader/Loader";
import NoResults from "../../components/NoResults/Noresults";

const TVShowDetailsPage: React.FC = () => {

    const { id } = useParams();
    const [show, setShow] = useState<IDetailedShow>();
    const [trailer, setTrailer] = useState<IVideo>();
    const [isAvailable, setIsAvailable] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            getSingleMedia('/tv', parseInt(id), setShow, setIsAvailable);
            getTrailer('/tv', parseInt(id), setTrailer);
        }
    }, [id]);

    return(
        <>
        { isAvailable ?
         show ?
        <div className="tvshow-details-page">
            <BackdropBackground imagePath={show?.backdrop_path} />
            <BackButton buttonText="Back" />
            { !trailer ? <BackdropImage imagePath={show?.backdrop_path} /> : <TrailerVideo trailerLink={trailer.key} /> }
            <div className="tvshow-details-page__content">
                <PosterImage imagePath={show?.poster_path} />
                <div className="tvshow-details-page__content__info">
                    <Title title={show?.name} />
                    <Overview
                        tagline={show?.tagline}
                        overview={show?.overview}
                        date={show?.first_air_date.toString()}
                        rating={show?.vote_average}
                        revenue={0}
                        budget={0} />
                    <Genres genres={show?.genres} />
                </div>
            </div>
        </div> : <div className="tvshow-details-loading"><Loader /></div>
        : <div className="tvshow-details-loading"><NoResults message="BZZZT! Page doesn't exist" textColor="#000000" /></div> }
        </>
    );
}

export default TVShowDetailsPage;