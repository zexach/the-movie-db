import React from "react";
import './PosterImage.scss'
import noImageIcon from '../../../assets/images/no-image.jpg'

type Props = {
    children?: React.ReactNode;
    imagePath: string | undefined
}

const PosterImage: React.FC<Props> = ({ imagePath }) => {

    return(
        <>
        <img src={imagePath === null ? noImageIcon : `https://image.tmdb.org/t/p/w500${imagePath}`}
            alt="poster"
            className="poster-image" />
        </>
    );
}

export default PosterImage;