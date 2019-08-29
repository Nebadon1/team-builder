import React, { useState } from 'react';
import data from "./Data";
import MemberForm from "./components/FormComponent/MemberForm"
import MemberList from "./components/MemberInfo/MemberList"

import "./App.css"
function App() {

  const [members, setMembers] = useState(data);

 //console.log(members)

 const addNewMember = member => {
  setMembers([...members, member]);
};


  return (
    <div className="App">
      <h1>My app form</h1>
      <div className="FormCard">
       <MemberForm addNewMember={addNewMember}/>
     </div>
      <div className="Cards">
     <MemberList  memList={members}/>
     </div>
     
    </div>
  );
}

export default App;
