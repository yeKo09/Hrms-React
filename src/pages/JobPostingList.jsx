import React, {useState, useEffect} from 'react'
import JobPostingService from '../services/jobPostingService';
import {  Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(()=>{
        let isMounted = true;
        let jobPostingService = new JobPostingService();
        jobPostingService.getAllJobPostingsWithDto().then(result=>{
            if(isMounted)
                setJobPostings(result.data.data);
        });
        return () => { isMounted = false };
    }, []);


    return (
        <div>
            <Item.Group divided>
                {
                    jobPostings.map(jobPosting => (
                        <Item key={jobPosting.jobPostingId}>
                            <Item.Image src="https://creativevip.net/resource-images/15-recruitment-icons-4.png" />
                            <Item.Content>
                                <Item.Header className="ui left">
                                    <Link to={`/jobPosting/${jobPosting.jobPostingId}`}>{jobPosting.jobTitle}</Link>
                                </Item.Header>
                                <span className="ui clearfix"></span>
                                <Item.Meta>
                                    <span className="ui left">{jobPosting.companyName}</span>
                                    <span className="ui clearfix"></span>
                                </Item.Meta>
                                <Item.Description>
                                    <Label className="ui createdat ui left" icon="calendar" content={"\tCreated at " + jobPosting.createdAt}/>
                                    <Label className="ui deadline ui left" icon="exclamation circle" content={"\tDeadline at " + jobPosting.deadlineDate}/>
                                    <span className="ui clearfix"></span>
                                </Item.Description>
                                <Item.Extra>
                                    <Label className="ui left" icon="building" content={jobPosting.cityName} />
                                    <Label className="ui left" icon="users" content={"Number of Open Positions : " + jobPosting.numberOfOpenPositions}/>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))
                }
            </Item.Group>
        </div>
    )
}
