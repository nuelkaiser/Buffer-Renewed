import React from 'react';
import { useState } from "react";


const Readmore = ({ children }) => {

    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    return (
        <p>
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore}>
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    )
}

export default Readmore