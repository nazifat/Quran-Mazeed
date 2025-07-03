import React from 'react';
import QuranSearch from '../QuranSearch/QuranSearch';

const NavigateQuran = () => {
    return (
        
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-info">Navigate Quran</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <QuranSearch></QuranSearch>
                </div>
            </div>
    );
};

export default NavigateQuran;