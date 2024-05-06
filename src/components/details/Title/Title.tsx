import React from "react";
import './Title.scss'

type Props = {
    children?: React.ReactNode;
    title: string | undefined,
}

const Title: React.FC<Props> = ({ title }) => {

    return(
        <>
        <h1 className="title">{title}</h1>
        </>
    );
}

export default Title;