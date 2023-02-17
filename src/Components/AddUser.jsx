import React,{useState} from 'react';

const AddUser=()=>{
    const[name,setName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    return (
     <div>
    <form onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
      <input type="submit" value='submit'/>
    </form>
     </div>
      );}

export default AddUser;