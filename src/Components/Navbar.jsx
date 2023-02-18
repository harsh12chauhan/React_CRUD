import { AppBar, Toolbar,styled } from '@mui/material'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header  = styled(AppBar)`
    background: #111111;
`
const Tabs = styled(NavLink)`
    font-size:15px;
    margin-right:20px;
    color:inherit;
    text-decroation:none;
`
const Tabs1 = styled(NavLink)`
    font-size:25px;
    margin-right:20px;
    border:2px solid white;
    padding:4px;
    color:inherit;
    text-decroation:none;    
`

const Navbar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs1>CRUD</Tabs1>
                <Tabs to="/">HOME</Tabs>
                <Tabs to="/users">USER'S</Tabs>
                <Tabs to="/adduser">ADD USERS</Tabs>
            </Toolbar>
    </Header>
  )
}

export default Navbar

