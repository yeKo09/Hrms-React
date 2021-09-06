import React from 'react'
import JobPostingList from '../pages/JobPostingList'
import Sidebar from './Sidebar'
import {Grid} from 'semantic-ui-react'
import JobPostingStaffValidationList from '../pages/JobPostingStaffValidationList'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import JobPostingDetail from '../pages/JobPostingDetail'
import JobPostingAdd from '../pages/JobPostingAdd'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar></Sidebar>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/jobPostings" component={JobPostingList}/>
                        <Route exact path="/jobPosting/:id" component={JobPostingDetail}/>
                        <Route exact path="/jobPostingStaffvalidations" component={JobPostingStaffValidationList}/>
                        <Route exact path="/addJobPosting" component={JobPostingAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
