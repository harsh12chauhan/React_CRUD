import { AppBar, Toolbar,styled } from '@mui/material'
import React from 'react'

const Header  = styled(AppBar)`
    background: #111111;
`
const Tabs = styled('p')`
    font-size:15px;
    margin-right:20px;
`
const Tabs1 = styled('p')`
    font-size:25px;
    margin-right:20px;
    border:2px solid white;
    padding:4px;
`

const Navbar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs1>CRUD</Tabs1>
                <Tabs>User's</Tabs>
                <Tabs>Add User</Tabs>
            </Toolbar>
    </Header>
  )
}

export default Navbar

