import React, { useEffect, useState } from 'react'
import JobSeekerService from '../services/jobSeekerService';

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(()=>{
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.getAllJobSeekers().then(result=>setJobSeekers(result.data.data));
    }, [])

    return (
        <div>
            
        </div>
    )
}
