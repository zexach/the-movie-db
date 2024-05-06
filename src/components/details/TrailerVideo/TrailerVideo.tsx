import React from "react";
import './TrailerVideo.scss'

type Props = {
    children?: React.ReactNode;
    trailerLink: string | undefined
}

const TrailerVideo: React.FC<Props> = ({ trailerLink }) => {

    return(
    <>
    <iframe className="trailer-video" width="600"
        height="315"
        src={`https://www.youtube.com/embed/${trailerLink}`}
        ></iframe>
    </>
    )
}

export default TrailerVideo;