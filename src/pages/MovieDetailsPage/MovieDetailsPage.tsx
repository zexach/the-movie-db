import React, { useEffect, useState } from "react";
import './MovieDetailsPage.scss'
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../../services/moviesService";
import { IDetailedMovie } from "../../models/detailedMovie";
import BackdropImage from "../../components/details/BackdropImage/BackdropImage";
import PosterImage from "../../components/details/PosterImage/PosterImage";
import Title from "../../components/details/Title/Title";
import Overview from "../../components/details/Overview/Overview";

const MovieDetailsPage: React.FC = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<IDetailedMovie>();

    useEffect(() => {
        if (id) {
            getSingleMovie('/movie', parseInt(id), setMovie)
        }
    }, [id]);

    return(
        <>
        <div className="movie-details-page">
            <div className="movie-details-page__header">
                <BackdropImage imagePath={movie?.backdrop_path} />
                <div className="movie-details-page__header__content">
                    <PosterImage imagePath={movie?.poster_path} />
                    <div className="movie-details-page__header__content__info">
                        <Title title={movie?.title} />
                        <Overview 
                            tagline={movie?.tagline}
                            overview={movie?.overview}
                            date={movie?.release_date.toString()}
                            rating={movie?.vote_average}
                            revenue={movie?.revenue} /> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetailsPage;