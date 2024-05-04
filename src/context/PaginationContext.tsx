import React from "react";
import { useState, createContext, useContext } from "react";

type PaginationContextType = {
    selectedPage: number;
    setSelectedPage: (page: number) => void;
}

export const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export const PaginationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedPage, setSelectedPage] = useState<number>(1);

    return (
        <PaginationContext.Provider value={{ selectedPage, setSelectedPage }}>
            { children }
        </PaginationContext.Provider>
    )
}

export const usePaginationContext = () => {
    const context = useContext(PaginationContext);
    if(!context) {
        throw new Error('usePaginationContext must be used within a PaginationProvider')
    }
    return context;
}