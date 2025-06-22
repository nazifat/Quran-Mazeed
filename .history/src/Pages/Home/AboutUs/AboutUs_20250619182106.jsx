import AboutImg from '../../../assets/images/about.png'

const AboutUs = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-full mx-auto flex flex-col md:flex-row items-center gap-0 justify-center-safe place-content-center">

                {/* Left Side - Image */}
                <div className="w-full">
                    <img
                        src={AboutImg}
                        alt="Quran Reading"
                        className=" h-auto"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full text-center md:text-left">
                    <h2 className="text-sm md:text-xl font-bold text-[#10D0D5] mb-4">
                        About Us
                    </h2>
                    <p className="text-4xl font-semibold text-gray-800 mb-4 leading-[1.5]">
                        Connecting Hearts to the Quran, One Verse at a Time
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
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
