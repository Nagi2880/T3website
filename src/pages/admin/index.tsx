import { api } from "~/utils/api";
import type { FormEvent } from "react";
import { useState } from 'react'
import type { NextPage } from "next";

const Adminhome:NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const adminMutation = api.admin.createAdmin.useMutation()
  
  function admincreate(){
   adminMutation.mutate({
    username,
    password
   },{
    onError(error){
      console.log(error)
    },
    onSuccess(data){
      alert(`Admin ${data.username} created`)
    }
   })
  }

  const superAdmin ={
    username: "admin",
    password: "1234"
  } 

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");

    
    
    if (username === superAdmin.username && password === superAdmin.password) {
      // Authenticate user as super admin
      console.log("Super admin logged in!");
      setIsLoggedIn(true);
    
    } else {
      console.error("Invalid username or password.");
  }
}
  return (
    <div>
      { isLoggedIn ? (
        
        <form onSubmit={(e) => {
          e.preventDefault()
          admincreate()
        }}>
          <h1>Welcome</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />

          <input type="submit" value='create admin' />  
        {adminMutation.isSuccess ? (
          <p>Admin successfully created</p>
        ): null}
        </form>
        ):(
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>

        <input type="submit" value='Log in' />  
        </form>
        )}      
    </div>
    );
}
export default Adminhome