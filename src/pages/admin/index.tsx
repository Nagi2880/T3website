
import { api } from "~/utils/api";
import type { FormEvent } from "react";

export default function Adminhome() {
  const adminMutation = api.admin.createAdmin.useMutation()
 
  const superAdmin ={
    username: "admin",
    password: "1234"
  } 
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");

    
    if (username === superAdmin.username && password === superAdmin.password) {
      // Authenticate user as super admin
      // e.g., set session cookie, store token, update user state
      console.log("Super admin logged in!");
    } else {
      console.error("Invalid username or password.");
  }
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <input type="submit" value='Log in' />
        </form>      
    </div>
    );
}