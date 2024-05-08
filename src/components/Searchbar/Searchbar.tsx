import React from "react";
import './Searchbar.scss'
import searchIcon from '../../assets/icons/search.svg'
import { useSearchContext } from "../../context/SearchContext";
import { usePaginationContext } from "../../context/PaginationContext";

type Props = {
    children?: React.ReactNode;
    placeholder: string;
}

const Searchbar: React.FC<Props> = ({ placeholder }) => {

    const { searchQuery, setSearchQuery } = useSearchContext();
    const { setSelectedPage } = usePaginationContext();

    const setSearch = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchQuery(e.target.value);
        setSelectedPage(1);
    }

    return(
        <>
            <div className="searchbar__section">
                <img src={searchIcon} alt="search" />
                <input 
                    type="text"
                    placeholder={placeholder}
                    onChange={setSearch}
                    value={searchQuery}
                    className="searchbar__section__input" />
            </div>
        </>
    )
}

export default Searchbar;