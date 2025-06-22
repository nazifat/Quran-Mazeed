import React from 'react';
import '../Quran/Quran.css'
const Quran = () => {


    
    return (
        <div className='w-3/4 mx-auto'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Surah" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Juz" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

           
            </div>

        </div>
    );
};

export default Quran;