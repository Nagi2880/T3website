import type { NextPage } from "next";
import { api } from '~/utils/api';
import type { FormEvent } from 'react';
import { useState } from "react";
const checkClient : NextPage = () => {
  
    const [validated, setValidated] = useState(false);

    const clientvalidate = api.checkclient.validateClient.useMutation()

    const handleSubmit = (event : FormEvent) =>{
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
    
        clientvalidate.mutate({username, password},
            {
                onError(error){
                    console.log(error)
                },
                onSuccess(){
                    setValidated(true)
                }
            })
        }
        if(validated){
            return(
                <div>
                    <h1>Welcome</h1>
                </div>
            )
        }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>

        <input type="submit" value='Log in' />  
        </form>
        
        </div>
    )
}

export default checkClient