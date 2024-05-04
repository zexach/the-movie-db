import React from "react";
import './SearchItem.scss'
import { Movie } from "../../models/movie";
import { Link } from "react-router-dom";
import { dateToLocaleString } from "../../utils/dateUtil";

type Props = {
    children?: React.ReactNode;
    movie: Movie;
}

const SearchItem: React.FC<Props> = ({ movie }) => {



    return(
        <>
        <Link to={`/movie/${movie.id}`}>
            <div className="search-item">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster" className="search-item__poster" />
                <div className="search-item__details">
                    <h3 className="search-item__details__title">{movie.title}</h3>
                    <p className="search-item__details__release-date">{dateToLocaleString(movie.release_date)}</p>
                    <p className="search-item__details__desc">
                        {movie.overview.length > 280 ? (movie.overview.substring(0, 280) + '...') : movie.overview}
                    </p>
                </div>
            </div>
        </Link>
        </>
    );
}

export default SearchItem;