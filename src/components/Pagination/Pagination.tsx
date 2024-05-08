import React from "react";
import './Pagination.scss'
import { usePaginationContext } from "../../context/PaginationContext";

type Props = {
    children?: React.ReactNode;
    total_pages: number | undefined;
    current_page: number | undefined;
}

const Pagination: React.FC<Props> = ({ total_pages, current_page }) => {

    const { setSelectedPage } = usePaginationContext();

    const handlePageSelect = (page: number): void => {
        setSelectedPage(page);
    }

    if(total_pages === undefined || current_page === undefined) {
        return null;
    }

    const startPage: number = Math.max(1, current_page - 3);
    const endPage: number = Math.min(total_pages, current_page + 3);

    const pages = Array.from({ length: (current_page + 7 <= total_pages) ? 7 : (endPage - startPage + 1) }, (_, i) => startPage + i);

    return(
        <>
        <div className="pagination">
            { pages ? pages.map(
                (page) => <button onClick={() => handlePageSelect(page)} className="pagination__page" key={page} disabled={page === current_page}>{ page }</button>) : ''}
        </div>
        </>
    );
}

export default Pagination;