import React from 'react';
import { Link } from 'react-router-dom';

const CustomBtn = ({ text, children, url }) => {
    return (
        <Link to={url} className="btn btn-outline custom-btn border rounded-full">

            {children}
            <span>{text}</span>

        </Link>

    );
};

export default CustomBtn;