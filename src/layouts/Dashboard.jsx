import React from 'react'
import JobPostingList from '../pages/JobPostingList'
import Sidebar from './Sidebar'
import {Grid} from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar></Sidebar>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobPostingList></JobPostingList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
