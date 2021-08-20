import React, {useState, useEffect} from 'react'
import JobPostingService from '../services/jobPostingService';
import { Image, Item, Label } from 'semantic-ui-react';

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(()=>{
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data));
    });

    return (
        <div>
            <Item.Group divided>
                {
                    jobPostings.map(jobPosting => (
                        <Item key={jobPosting.id}>
                            <Item.Image src="https://creativevip.net/resource-images/15-recruitment-icons-4.png" />
                            <Item.Content>
                                <Item.Header className="ui left">
                                    {jobPosting.jobPosition.jobTitle}
                                </Item.Header>
                                <span className="ui clearfix"></span>
                                <Item.Meta>
                                    <span className="ui left">{jobPosting.employer.companyName}</span>
                                    <Label className="ui deadline" icon="exclamation circle" content={"\tDeadline " + jobPosting.deadlineDate}/>
                                    <Label className="ui createdat" icon="calendar" content={"\tCreated at " + jobPosting.createdAt}/>
                                    <span className="ui clearfix"></span>
                                </Item.Meta>
                                <Item.Description>
                                    <span className="ui left">{jobPosting.jobDescription}</span>
                                    <span className="ui clearfix"></span>
                                </Item.Description>
                                <Item.Description>
                                    <span className="ui left">
                                        Maaş Aralığı : {jobPosting.minimumWage} TL - {jobPosting.maximumWage} TL
                                    </span>
                                    <span className="ui clearfix"></span>
                                </Item.Description>
                                <Item.Extra>
                                    <Label className="ui left" icon="building" content={jobPosting.city.cityName} />
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
