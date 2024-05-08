import React from "react";
import './NoResults.scss'

type Props= {
    children?: React.ReactNode;
    message: string;
    textColor: string
}

const NoResults: React.FC<Props> = ({ message, textColor }) => {

    return(
        <>
        <p style={{ color: textColor }} className="no-results">{message}</p>
        </>
    );
}

export default NoResults;