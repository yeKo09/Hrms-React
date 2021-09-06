import React, { useEffect, useState } from 'react'
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {

    const [jobPositions,setJobPositions] = useState([]);

    useEffect(()=>{
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result=>setJobPositions(result.data.data));
    }, []);

    return (
        <div>
            <ul>
            {
                jobPositions.map(jobPosition=>(
                    <li key={jobPosition.id}>{jobPosition.jobTitle}</li>   
                ))
            }
            </ul>
        </div>
    )
}
