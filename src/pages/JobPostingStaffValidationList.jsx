import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react';
import JobPostingStaffValidationService from '../services/jobPostingStaffValidationService'

export default function JobPostingStaffValidationList() {

    const [validationList, setValidationList] = useState([])

    useEffect(() => {
        let isMounted = true;
        let jobPostingStaffValidationService = new JobPostingStaffValidationService();
        jobPostingStaffValidationService.getAllUnverifiedJobPostings().then(result => {
            if(isMounted)
                setValidationList(result.data.data);
        });
        console.log("deneme");
        return () => { isMounted = false };
    },[validationList])
    

    function verifyJobPosting(id){
        let jobPostingStaffValidationService1 = new JobPostingStaffValidationService();
        jobPostingStaffValidationService1.verifyJobPosting(id);
    }

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Posting ID</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Work Place</Table.HeaderCell>
                        <Table.HeaderCell>Work Time</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                        <Table.HeaderCell>Validate</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        validationList.map(validation => (
                            <Table.Row key={validation.id}>
                                <Table.Cell>{validation.jobPosting.id}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.jobPosition.jobTitle}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.city.cityName}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.workPlace.workPlace}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.workTime.workTime}</Table.Cell>
                                <Table.Cell>{validation.jobPosting.createdAt}</Table.Cell>
                                <Table.Cell><Button primary onClick={()=> verifyJobPosting(validation.id)}>Validate</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
