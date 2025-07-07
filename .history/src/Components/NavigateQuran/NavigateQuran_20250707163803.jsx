import React from 'react';
import QuranSearch from '../QuranSearch/QuranSearch';

const NavigateQuran = () => {
    return (
        <>
            {/* Trigger Button (can be placed anywhere) */}
            <label
                htmlFor="my-drawer-4"
                className="btn custom-btn bg-[#42CDD0] text-white  hover:bg-[#35b6ba] shadow-md"
            >
                Navigate Quran
            </label>

            {/* Drawer */}
            <div className="drawer drawer-end z-[9999]">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-overlay bg-black bg-opacity-30 backdrop-blur-sm"
                    ></label>

                    <div className="w-80 sm:w-96 bg-white h-full p-6 shadow-lg overflow-y-auto">
                        <h2 className="text-xl font-semibold text-[#2C366E] mb-4 border-b pb-2">
                             Search & Navigate
                        </h2>
                        <QuranSearch />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigateQuran;
