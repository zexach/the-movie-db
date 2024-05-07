import React from "react";
import { useState, useContext, createContext } from "react";

type SearchContextType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return(
        <>
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            { children }
        </SearchContext.Provider>
        </>
    );
}

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within SearchProvider');
    }

    return context;
}