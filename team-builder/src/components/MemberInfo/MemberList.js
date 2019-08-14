import React from "react";
import "./MemberList.css"
const MemberList = props => {
 //console.log('MemberList @ MemberList.js',props);
  
  return (
    <div>
      {props.memList.map(member => {
        return (
          
          <div className="member-info" key={member.id}>
            
             <h2>{`Name:${member.Name} ${member.LastName}`}</h2>
             <h2>{`Role:${member.Role}`}</h2>
             <h2 >{`Role:${member.Email}`}</h2>
             
          </div>
          
        );
      })}
    </div>
   );
};

export default MemberList;





//possible additions

//numberOfLines={1} ellipsis effect on email address