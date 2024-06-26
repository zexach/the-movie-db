import React from "react";
import appLogo from '../../../assets/icons/tmdb-logo-long.svg'
import movieIcon from '../../../assets/icons/movie.svg'
import tvShowIcon from '../../../assets/icons/tv-show.svg'
import './Sidebar.scss'
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

    return(
        <>
        <div className="navbar">
            <Link to='/'>
                <div className="navbar__logos">
                    <img src={appLogo} alt="TMDB" className="navbar__logos__logo" />
                </div>
            </Link>
            <div className="navbar__pages">
                <Link to='/'>
                    <div className="navbar__pages__page">
                        <img src={movieIcon} alt="movie" />
                        <p className="navbar__pages__page__name">Movies</p>
                    </div>
                </Link>
                <Link to='/shows'>
                    <div className="navbar__pages__page">
                        <img src={tvShowIcon} alt="movie" />
                        <p className="navbar__pages__page__name">TV Shows</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Navbar;