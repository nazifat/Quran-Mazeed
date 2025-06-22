import { Link } from 'react-router-dom';


const CustomBtn2 = ({ text, children }) => {
    return (
        <Link to="/" className="btn bg-gradient-to-r from-[#12D6DA] to-[#00B0B5] text-white border-none rounded-lg 
        font-bold 
        px-6 py-6 text-base hover:from-[#00B0B5] hover:to-[#12D6DA] transition-all duration-300">

            {children}
            <span>{text}</span>

        </Link>

    );
};

export default CustomBtn2;