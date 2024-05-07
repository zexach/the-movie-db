import React from "react";
import './SearchItem.scss'
import { Link } from "react-router-dom";
import { dateToLocaleString } from "../../utils/dateUtil";
import noImageIcon from '../../assets/images/no-image.jpg';
import { IMedia } from "../../models/media";

type Props = {
    children?: React.ReactNode;
    item: IMedia;
}

const SearchItem: React.FC<Props> = ({ item }) => {

    return(
        <>
        <Link to={item.isMovie ? `/movie/${item.id}` : `/show/${item.id}`}>
            <div className="search-item">
                <img src={item.poster_path === null ? noImageIcon : `https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Poster" className="search-item__poster" />
                <div className="search-item__details">
                    <h3 className="search-item__details__title">{item.name}</h3>
                    <p className="search-item__details__release-date">{dateToLocaleString(item.first_air_date)}</p>
                    <p className="search-item__details__desc">
                        {item.overview.length > 280 ? (item.overview.substring(0, 280) + '...') : item.overview}
                    </p>
                </div>
            </div>
        </Link>
        </>
    );
}

export default SearchItem;