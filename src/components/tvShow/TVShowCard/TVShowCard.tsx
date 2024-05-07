import React from "react";
import './TVShowCard.scss'
import { Link } from "react-router-dom";
import { ITVShow } from "../../../models/tvShow.js";
import { dateToLocaleString } from "../../../utils/dateUtil";

type Props = {
    children?: React.ReactNode;
    tvShow: ITVShow;
}

const TVShowCard: React.FC<Props> = ({ tvShow }) => {

    return(
        <>
        <Link to={`/show/${tvShow.id.toString()}`}>
            <div className="tvShow-card">
                <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt="tvShow-card" className="tvShow-card__img" />
                <div className="tvShow-card__details">
                    <h1 className="tvShow-card__details__title">{ tvShow.name.toUpperCase() }</h1>
                    <div className="tvShow-card__details__sub">
                        <p className="tvShow-card__details__sub__info">
                            Rating <span className="tvShow-card__details__sub__info__span">{ tvShow.vote_average.toFixed(1) }</span>
                        </p>
                        <p className="tvShow-card__details__sub__info">
                            Production date <span className="tvShow-card__details__sub__info__span">{ dateToLocaleString(tvShow.first_air_date) }</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default TVShowCard;