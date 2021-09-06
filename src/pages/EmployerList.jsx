import React, { useEffect, useState } from 'react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService();
        employerService.getAllEmployers().then(result=>setEmployers(result.data.data));
    }, [])

    return (
        <div>
            
        </div>
    )
}
