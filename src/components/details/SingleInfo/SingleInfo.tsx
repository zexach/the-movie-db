import React from "react";
import './SingleInfo.scss'

type Props = {
    children?: React.ReactNode,
    infoTitle: string,
    info: string | number | undefined
}

const SingleInfo: React.FC<Props> = ({ infoTitle, info }) => {

    return(
        <>
        <div className="single-info">
            <p className="single-info__title"><i>{infoTitle}</i></p>
            <p className="single-info__info">{info}</p>
        </div>
        </>
    );
}

export default SingleInfo;