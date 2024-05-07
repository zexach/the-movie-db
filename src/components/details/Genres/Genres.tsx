import React from "react";
import './Genres.scss'
import { IGenre } from "../../../models/genre";

type Props = {
    children?: React.ReactNode;
    genres: IGenre[] | undefined
}

const Genres: React.FC<Props> = ({ genres }) => {

    return(
        <>
        <div className="genres">
            <p className="genres__title">{ genres ? (genres?.length > 1 ? 'Genres:' : 'Genre:') : '' }</p>
            { genres?.map((genre) => <p key={genre.id} className="genres__genre"><i>{genre.name}</i></p>) }
        </div>
        </>
    );
}

export default Genres;