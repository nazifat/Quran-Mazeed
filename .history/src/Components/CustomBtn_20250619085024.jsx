import React from 'react';
import { Link } from 'react-router-dom';

const CustomBtn = ({ text, children }) => {
    return (
        <Link to="/" className="btn btn-outline  border rounded-lg">

            {children}
            <span>{text}</span>

        </Link>

    );
};

export default CustomBtn;