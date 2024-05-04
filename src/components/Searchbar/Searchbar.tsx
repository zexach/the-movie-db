import React, { ChangeEvent, useState } from "react";
import './Searchbar.scss'
import searchIcon from '../../assets/icons/search.svg'

type Props = {
    children?: React.ReactNode;
    placeholder: string;
    onSearch: (query: string) => void;
}

const Searchbar: React.FC<Props> = ({ placeholder, onSearch }) => {

    const [searchQuery, setSearchQuery] = useState<string>('');

    const setSearch = (e: React.ChangeEvent<HTMLInputElement>):void => {
        onSearch(e.target.value);
    }

    return(
        <>
            <div className="searchbar__section">
                <img src={searchIcon} alt="search" />
                <input 
                    type="text"
                    placeholder={placeholder}
                    onChange={setSearch}
                    className="searchbar__section__input" />
            </div>
        </>
    )
}

export default Searchbar;