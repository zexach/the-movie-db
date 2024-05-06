import React from "react";
import './BackdropBackground.scss'
import noImageIcon from '../../../assets/images/no-image.jpg'

type Props = {
    children?: React.ReactNode,
    imagePath: string | undefined
}

const BackdropBackground: React.FC<Props> = ({ imagePath }) => {

    return(
        <>
        <div className="backdrop-background">
            <img 
                className="backdrop-background__image"
                src={imagePath === null ? noImageIcon : `https://image.tmdb.org/t/p/w500${imagePath}`}
                alt="background" />
        </div>
        </>
    );
}

export default BackdropBackground;