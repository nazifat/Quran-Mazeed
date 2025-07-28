import React from 'react';
import QuranSearch from '../QuranSearch/QuranSearch';
import QuranSearchSideBar from '../QuranSearch/QuranSearchSideBar';

const NavigateQuran = () => {
    return (
        <div className="relative z-[99999]">
            {/* Drawer structure */}
            <div className="drawer drawer-end z-[99999] fixed top-0 left-0 w-full h-full">
                {/* Toggle control */}
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                {/* Trigger Button (can be placed anywhere) */}
                <div className="drawer-content">
                    <label
                        htmlFor="my-drawer-4"
                        className="btn btn-lg p-6 rounded-lg bg-[#42CDD0] text-[15px] dark:text-gray-100 border-0 hover:bg-[#35b6ba] shadow-md"
                    >
                        Navigate Quran
                    </label>
                </div>

                {/* Drawer panel */}
                <div className="drawer-side z-[999999]">
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-overlay bg-black bg-opacity-30 backdrop-blur-sm"
                    ></label>

                    <div className="w-80 sm:w-96 dark:bg-gray-400 bg-white h-full p-6 shadow-lg overflow-y-auto">
                        <h2 className="text-xl font-semibold text-[#2C366E] mb-4 border-b pb-2">
                            Search & Navigate
                        </h2>
                        <QuranSearchSideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NavigateQuran;
