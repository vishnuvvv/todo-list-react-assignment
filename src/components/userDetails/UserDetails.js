import { useEffect, useState } from "react";
import { fetchUser } from "../../api-helpers/api-helper";
import "./UserDetails.css";

const UserDetails = ({todo}) => {
  const [user , setUser] = useState(" ")

  useEffect(() =>{
    if(todo){
      fetchUser(todo.userId).then((data)=>{
        setUser(data)
      }).catch((err)=>console.log(err))
    }
  },[todo])
  return (
    <div className="userDetailsBox">
      <div>
        <div>ToDo ID  :{"  "}{todo.id}</div>
      </div>
      <div>
        <div>ToDo Title  :{"  "}{todo.title}</div>
      </div>
      <div>
        <div>User Id  :{"  "}{todo.userId}</div>
      </div>
      <div>
        <div>Name  :{"  "}{user.name}</div>
      </div>
      <div>
        <div>Email  :{"  "}{user.email}</div>
      </div>
    </div>
  );
};

export default UserDetails;
