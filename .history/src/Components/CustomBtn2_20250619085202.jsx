import { Link } from 'react-router-dom';


const CustomBtn2 = ({ text, children }) => {
    return (
        <Link to="/" className="btn bg-[#12D6DA] border rounded-lg text-gray-200">

            {children}
            <span>{text}</span>

        </Link>

    );
};

export default CustomBtn2;