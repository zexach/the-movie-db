import React, { ChangeEvent } from "react";
import './Searchbar.scss'
import searchIcon from '../../assets/icons/search.svg'

type Props = {
    children?: React.ReactNode;
    placeholder: string;
}

const Searchbar: React.FC<Props> = ({ placeholder }) => {

    const handleSearch = (e: React.FormEvent) => {
        e?.preventDefault();
        console.log('heheh');
    }

    return(
        <>
        <form onSubmit={handleSearch} className="searchbar">
            <div className="searchbar__section">
                <img src={searchIcon} alt="search" />
                <input type="text" placeholder={placeholder} className="searchbar__section__input" />
                <button type="submit" className="searchbar__section__btn">Search</button>
            </div>
        </form>
        </>
    )
}

export default Searchbar;