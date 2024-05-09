import React from "react";
import './NotFoundPage.scss'
import NoResults from "../../components/NoResults/Noresults";

const NotFoundPage: React.FC = () => {

    return(
        <>
        <div className="not-found-page">
            <NoResults message="Page doesn't exist" textColor="#000000" />
        </div>
        </>
    );
}

export default NotFoundPage;