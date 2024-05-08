import React from "react";
import './BackdropImage.scss'

type Props = {
    children?: React.ReactNode;
    imagePath: string | undefined
}

const BackdropImage: React.FC<Props> = ({ imagePath }) => {

    return(
        <>
        { imagePath ? 
            <img 
            src={`https://image.tmdb.org/t/p/w500${imagePath}`}
            alt="backdrop"
            className="backdrop-image" /> : '' }
        </>
    );
}

export default BackdropImage;