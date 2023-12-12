import { api } from "~/utils/api";
import type { FormEvent } from "react";
import { useState } from 'react'
import Formlabels from "~/components/formlabels";

export default function Adminhome() {
  const adminMutation = api.admin.createAdmin.useMutation()
 
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
        
        <form onSubmit={adminMutation}>
          <h1>Welcome</h1>
        <Formlabels/>
        </form>
        ):(
        <form onSubmit={handleSubmit}>
          <Formlabels />
        </form>
        )}      
    </div>
    );
}