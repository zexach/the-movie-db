import React from "react";
import './WelcomeMessage.scss'

type Props = {
    children?: React.ReactNode,
    message: string,
    details: string
}

const WelcomeMessage: React.FC<Props> = ({ message, details }) => {

    return(
        <>
        <div className="welcome-message">
            <h1 className="welcome-message__title">{message}</h1>
            <p className="welcome-message__details">{details}</p>
        </div>
        </>
    );
}

export default WelcomeMessage;