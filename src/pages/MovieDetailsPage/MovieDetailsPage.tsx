import React, { useEffect, useState } from "react";
import './MovieDetailsPage.scss'
import { useParams } from "react-router-dom";
import { getSingleMedia, getTrailer } from "../../services/mediaService";
import { IVideo } from "../../models/video";
import { IDetailedMovie } from "../../models/detailedMovie";
import BackdropImage from "../../components/details/BackdropImage/BackdropImage";
import PosterImage from "../../components/details/PosterImage/PosterImage";
import Title from "../../components/details/Title/Title";
import Overview from "../../components/details/Overview/Overview";
import BackdropBackground from "../../components/details/BackdropBackground/BackdropBackground";
import TrailerVideo from "../../components/details/TrailerVideo/TrailerVideo";
import Genres from "../../components/details/Genres/Genres";
import BackButton from "../../components/details/BackButton/BackButton";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage: React.FC = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<IDetailedMovie>();
    const [trailer, setTrailer] = useState<IVideo>();

    useEffect(() => {
        if (id) {
            getSingleMedia('/movie', parseInt(id), setMovie)
            getTrailer('/movie', parseInt(id), setTrailer);
        }
    }, [id]);

    return(
        <>
        { movie ?
        <div className="movie-details-page">
            <BackdropBackground imagePath={movie?.backdrop_path} />
            <BackButton buttonText="Back" />
            { !trailer ? <BackdropImage imagePath={movie?.backdrop_path} /> : <TrailerVideo trailerLink={trailer.key} /> }
            <div className="movie-details-page__content">
                <PosterImage imagePath={movie?.poster_path} />
                <div className="movie-details-page__content__info">
                    <Title title={movie?.title} />
                    <Overview 
                        tagline={movie?.tagline}
                        overview={movie?.overview}
                        date={movie?.release_date.toString()}
                        rating={movie?.vote_average}
                        revenue={movie?.revenue} />
                    <Genres genres={movie?.genres} />
                </div>
            </div>
        </div> : <div className="movie-details-loading"><Loader /></div> }
        </>
    );
}

export default MovieDetailsPage;