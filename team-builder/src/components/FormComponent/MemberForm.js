import React, { useState } from "react";
import FormStyle from "./FormStyle.css";

const MemberForm = props=>{
    //console.log('Form MememberForm props', props);

     const [names, setNames]=useState({ 
     Name: "",

     LastName: "",

     Role: "",

     Email: ""
     
     });
     const changetHandler = event =>{
     setNames({...names, [event.target.name]: event.target.value})
    }
    
    console.log(names)
    const onSubmitForm = event=>{
        event.preventDefault();
        const newMember ={
            ...names, 
            id: Date.now()        
        }
      props.addNewMember(newMember);
    }


    return(

    <form className="Form" onSubmit={onSubmitForm}>
        <label htmlFor="name">Name:</label>
        <input  type="text" name="Name" placeholder="Your Name Here" onChange={changetHandler} value={names.Name}/>

        <label htmlFor="lastName">Lastname:</label>
        <input type="text" name="LastName" placeholder="Your Last name Here" onChange={changetHandler} value={names.LastName}/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="Email" placeholder= "Your Email Here" onChange={changetHandler} value={names.Email}/>

        <label htmlFor="role">Role:</label>
        <select type="text" name="Role" placeholder= "Your Email Here" onChange={changetHandler} value={names.Role}>
        <option value="Web">Web</option>
        <option value="UX">UX</option>
        <option value="UI">UI</option>
        <option value="BackEnd">Back End</option>
        </select>
        <button type="submit">Add Member</button>


    </form>
        
    )
}



export default MemberForm;