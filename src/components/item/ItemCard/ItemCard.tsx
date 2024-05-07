import React from "react";
import './ItemCard.scss'
import { Link } from "react-router-dom";
import { dateToLocaleString } from "../../../utils/dateUtil";
import { IMedia } from "../../../models/media";

type Props = {
    children?: React.ReactNode,
    item: IMedia
}

const ItemCard: React.FC<Props> = ({ item }) => {

    return(
        <>
        <Link to={item.isMovie ? `/movie/${item.id.toString()}` : `/show/${item.id.toString()}`}>
            <div className="item-card">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="item-card" className="item-card__img" />
                <div className="item-card__details">
                    <h1 className="item-card__details__title">{ item.name.toUpperCase() }</h1>
                    <div className="item-card__details__sub">
                        <p className="item-card__details__sub__info">
                            Rating <span className="item-card__details__sub__info__span">{ item.vote_average.toFixed(1) }</span>
                        </p>
                        <p className="item-card__details__sub__info">
                            Production date <span className="item-card__details__sub__info__span">{ dateToLocaleString(item.first_air_date) }</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default ItemCard;