import { useEffect, useRef, useState } from 'react';
// import AboutImg from '../../../assets/images/about.png'
import '../AboutUs/AboutUs.css'

const AboutUs = () => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (ref.current) observer.observe(ref.current);
    }, []);

    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20 about-home ">
            <div className="max-w-6xl  w-full mx-auto flex flex-col md:flex-row items-center justify-center-safe ">

                {/* Left Side - Image */}
                <div className="md:w-1/2 w-full ">
                    <img
                        src="https://i.ibb.co/DDNZhWTk/6556145.webp"
                        alt="Quran Reading"
                        ref={ref}
                        className={`hidden-slide h-auto ${isVisible ? 'animate-slide-in-left' : ''}`}

                    />
                </div>

                {/* Right Side - Text */}
                <div className=" text-center md:text-left md:w-1/2 w-full">

                    <h2 className={`hidden-slide text-sm md:text-xl font-bold text-[#10D0D5] mb-4 ${isVisible ? 'animate-slide-in-right' : ''}`}

                    >

                        About Us
                    </h2>
                    <p className={`hidden-slide text-xl md:text-4xl font-bold text-gray-500 mb-4 leading-[1.5] ${isVisible ? 'animate-slide-in-right' : ''}`}>

                        Connecting Hearts to the Quran, One Verse at a Time
                    </p>
                    <p className={`hidden-slide text-gray-500 text-base leading-[2] ${isVisible ? 'animate-slide-in-right' : ''}`}>

                        Read the Quran online anytime, anywhere. Our platform brings you the words of Allah in clear Arabic text with translation and tafsir, making it easy to connect with the Quran, deepen your understanding, and strengthen your faith.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;
