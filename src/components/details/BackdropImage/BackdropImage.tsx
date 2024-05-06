import React from "react";
import './BackdropImage.scss'
import noImageIcon from '../../../assets/images/no-image.jpg'

type Props = {
    children?: React.ReactNode;
    imagePath: string | undefined
}

const BackdropImage: React.FC<Props> = ({ imagePath }) => {

    return(
        <>
        <img 
            src={imagePath === null ? noImageIcon : `https://image.tmdb.org/t/p/w500${imagePath}`}
            alt="backdrop"
            className="backdrop-image" />
        </>
    );
}

export default BackdropImage;