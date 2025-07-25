import AboutImg from '../../../assets/images/about.png'

const AboutUs = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-6xl  w-full mx-auto flex flex-col md:flex-row items-center justify-center-safe ">

                {/* Left Side - Image */}
                <div className="md:w-1/2 w-full ">
                    <img
                        src={AboutImg}
                        alt="Quran Reading"
                        className=" h-auto animate-slide-in-left"
                    />
                </div>

                {/* Right Side - Text */}
                <div className=" text-center md:text-left md:w-1/2 w-full">
                    <h2 className="text-sm md:text-xl font-bold text-[#10D0D5] mb-4 animate-slide-in-right">
                        About Us
                    </h2>
                    <p className="text-4xl font-semibold text-gray-500 mb-4 leading-[1.5] animate-slide-in-right">
                        Connecting Hearts to the Quran, One Verse at a Time
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed animate-slide-in-right">
                        This timeless teaching forms the heart of our mission.
                        The Quran Reading website is founded on the belief that
                        access to Islamic knowledge—especially the words of Allah—should be easy,
                        meaningful, and open to all. From the earliest days of Islam,
                        the pursuit of knowledge uplifted the Muslim Ummah,
                        guiding them toward excellence in faith, character, and civilization.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;
