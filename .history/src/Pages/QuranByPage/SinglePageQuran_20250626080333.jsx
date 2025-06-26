import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePageQuran = () => {

    const {pageNum}= useParams();

    useEffect(()=>{
        fetch(`https://apis-prelive.quran.foundation/content/api/v4/verses/by_page/${pageNum}`)
        .then(res=>res.json())
        .then(data=>{
            console.log("new api page", data.data);

        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default SinglePageQuran;