import React from "react";
import './Overview.scss'
import { dateToLocaleString } from "../../../utils/dateUtil";
import SingleInfo from "../SingleInfo/SingleInfo";

type Props = {
    children?: React.ReactNode,
    tagline: string | undefined,
    overview: string | undefined,
    date: string | undefined,
    rating: number | undefined
    revenue: number | undefined
}

const Overview: React.FC<Props> = ({ tagline, overview, date, rating, revenue }) => {

    const dateString = date ? date.toString() : '';

    return(
        <>
        <div className="overview">
            <p className="overview__tagline"><i>{tagline}</i></p>
            <p className="overview__info">{overview}</p>
            <div className="overview__additional">
                { date ? <SingleInfo infoTitle="Production date" info={dateToLocaleString(dateString)} /> : '' }
                <SingleInfo infoTitle="Rating" info={rating?.toFixed(1)} />
                <SingleInfo infoTitle="Revenue" info={`$ ${revenue?.toLocaleString()}`} />
            </div>
        </div>
        </>
    );
}

export default Overview;