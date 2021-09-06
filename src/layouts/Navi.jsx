import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu, Button, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='Home'
                        as={NavLink}
                        to="/"
                    />
                    <Menu.Item
                        name='Profile'
                    />
                    <Menu.Item>
                            <Input icon='search' placeholder='Enter a company name'/>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Post a Job'
                        />
                        <Menu.Item>
                            <Button primary>Sign In</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
