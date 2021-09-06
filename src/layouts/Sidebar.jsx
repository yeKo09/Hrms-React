import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item
                    name='job postings'
                >
                    <Icon name='briefcase' />
                    <Dropdown item text='Jobs'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/jobPostings">Find a Job</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/addJobPosting">Post a Job</Dropdown.Item>
                            <Dropdown.Item>Deactivate a Job</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='cv'
                >
                    <Icon name='file alternate' />
                    Cv
                </Menu.Item>

                <Menu.Item
                    name='validations'
                >
                    <Icon name='checkmark box' />
                    <Dropdown item text='Validations'>
                        <Dropdown.Menu>
                            <Dropdown.Item>User e-mail validation</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/jobPostingStaffValidations">Job posting validation</Dropdown.Item>
                            <Dropdown.Item>Employer update validation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item
                    name='job positions'
                >
                    <Icon name='clipboard' />
                    Job Positions
                </Menu.Item>
                <Menu.Item
                    name='cities'
                >
                    <Icon name='chess rock' />
                    Cities
                </Menu.Item>
                <Menu.Item
                    name='job seekers'
                >
                    <Icon name='users' />
                    Job Seekers
                </Menu.Item>
                <Menu.Item
                    name='employers'
                >
                    <Icon name='building' />
                    Employers
                </Menu.Item>
            </Menu>
        </div>
    )
}
