import React from "react";
import './BackButton.scss'
import arrowLeft from '../../../assets/icons/arrow-left.svg'
import { useNavigate } from "react-router-dom";

type Props = {
    children?: React.ReactNode;
    buttonText: string;
}

const BackButton: React.FC<Props> = ({ buttonText }) => {

    const navigate = useNavigate();

    return(
        <>
        <div onClick={() => navigate('/')} className="back-button">
            <img src={arrowLeft} alt="arrow" className="back-button__icon" />
            <p className="back-button__text">{buttonText}</p>
        </div>
        </>
    );
}

export default BackButton;