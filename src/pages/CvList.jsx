import React, { useEffect, useState } from 'react'
import CvService from '../services/cvService';

export default function CvList() {

    const [cvList,setCvList] = useState([]);

    useEffect(()=>{
        let cvService = new CvService();
        cvService.getAllCv().then(result=>setCvList(result.data.data));
    }, [])

    return (
        <div>
            
        </div>
    )
}
