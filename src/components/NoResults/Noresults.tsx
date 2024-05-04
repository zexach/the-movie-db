import React from "react";
import './NoResults.scss'

type Props= {
    children?: React.ReactNode;
    message: string;
}

const NoResults: React.FC<Props> = ({ message }) => {

    return(
        <>
        <p className="no-results">{message}</p>
        </>
    );
}

export default NoResults;