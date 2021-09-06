import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobPostingService from '../services/jobPostingService';
import { Label, Button, Card } from 'semantic-ui-react'

export default function JobPostingDetail() {

    let { id } = useParams();

    const [isLoading, setLoading] = useState(true);
    const [jobPosting, setJobPosting] = useState({});


    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getById(id).then(result=>{
            setJobPosting(result.data.data);
            setLoading(false);
        });
    }, [id])

    if(isLoading){
        return <div>Loading..</div>
    }


    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{jobPosting.jobPosition.jobTitle}</Card.Header>
                        <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
                        <Card.Description>
                            <Label className="ui createdat" icon="calendar" content={"\tCreated at " + jobPosting.createdAt} />
                            <Label className="ui deadline" icon="exclamation circle" content={"\tDeadline at " + jobPosting.deadlineDate} />
                            <Label icon="checkmark" content="Verified" />
                        </Card.Description>
                        <Card.Description className="ui jobpostingelement">
                            <p>{jobPosting.jobDescription}</p>
                        </Card.Description>
                        <Card.Description className="ui jobpostingelement">
                           <p>{`Minimum Wage : ${jobPosting.minimumWage} TL - Maximum Wage : ${jobPosting.maximumWage} TL`}</p> 
                        </Card.Description>
                        <Card.Description className="ui jobpostingelement">
                            <p>{`Located in : ${jobPosting.city.cityName}`}</p>
                        </Card.Description>
                        <Card.Description className="ui jobpostingelement">
                            <p>{`Work Place : ${jobPosting.workPlace.workPlace}`}</p>
                        </Card.Description>
                        <Card.Description className="ui jobpostingelement">
                            <p>{`Work Time : ${jobPosting.workTime.workTime}`}</p>
                        </Card.Description>
                        <Card.Description>
                            <p>{`Get in touch with the employer :`}</p>
                            <p>{`E-mail Address : ${jobPosting.employer.emailAddress}`}</p>
                            <p>{`Website : ${jobPosting.employer.website}`}</p>
                            <p>{`Phone Number : ${jobPosting.employer.phoneNumber}`}</p>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
