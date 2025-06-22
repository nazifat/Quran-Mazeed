import { Link } from 'react-router-dom';


const CustomBtn2 = ({ text, children }) => {
    return (
        <Link to="/" className="btn  custom-btn border rounded-lg">

            {children}
            <span>{text}</span>

        </Link>

    );
};

export default CustomBtn2;