import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" font-nunito footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>

                    <p className='font-nunito text-2xl font-bold'>
                        Quran Mazeed
                        <br />


                    </p>
                    <span>
                        Quran Mazeed is built with love for the Qur’an — read, reflect, and reconnect with Allah ﷻ through a simple and focused interface.
                    </span>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>


            <div className="text-center text-gray-600 text-sm mt-10 mb-5">
                © {new Date().getFullYear()} Quran Mazeed. All rights reserved.
                <br />
            </div>
        </div>

    );
};

export default Footer;