import React from 'react';
import { Link } from 'react-router-dom';

const CustomBtn = ({text}) => {
    return (
        <Link to="/" className="btn btn-outline custom-btn">{text}</Link>

    );
};

export default CustomBtn;