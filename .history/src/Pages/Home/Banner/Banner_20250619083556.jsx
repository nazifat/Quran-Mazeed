import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen bg-[#ECFBF9]" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-4'>
                        <span className='my-10 bg-[#C8F3F1] text-[#01ADD5] border rounded-full px-4 py-1 text-base' >Know Your Deen</span>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;