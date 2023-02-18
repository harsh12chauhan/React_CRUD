import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from '@mui/material';
import {useState} from 'react';

import { addUser } from '../Server/api';

const Container = styled(FormGroup)`
   width:50%;
   margin:3% auto 0 auto;
   & > div{
      margin-top:30px;
   }
`

const defaultValue = {
   name:'',
   email:'',
   phone:'',
   password:''
}

const AddUser = () => {
   const [user,setUser] =useState(defaultValue)

   const handleChange=(e)=>{
      console.log(user);
    setUser({...user,[e.target.name]:e.target.value})

   }

   const addUserdetails= async()=>{
      await addUser(user);
   }
   return (
      <Container>
      <Typography variant='h4'>ADD USER</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type='text' name='name' onChange={(e)=>handleChange(e)}/>
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type='email' name='email' onChange={(e)=>handleChange(e)}/>
         </FormControl>
         <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input type='numbner' name='phone' onChange={(e)=>handleChange(e)}/>
         </FormControl>
         <FormControl>
            <InputLabel>Password</InputLabel>
            <Input type='password' name='password' onChange={(e)=>handleChange(e)}/>
         </FormControl>
         <FormControl>
         <Button variant='contained' onClick={()=>addUserdetails}> ADD </Button>
         </FormControl>
      </Container>
   );
}

export default AddUser;