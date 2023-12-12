import type { NextPage } from 'next';
import type { FormEvent } from 'react';
import { api } from '~/utils/api';
import { useState } from 'react';

const agentLogin : NextPage = () =>{
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const agentvalidate = api.client.validateLoginClient.useMutation()
    const clientmutation = api.client.createClient.useMutation()
    
    function clientcreate(){
        clientmutation.mutate({
            username,
            password,
        },{
            onError(error){
                console.log(error)
            },
            onSuccess(data){
                alert(`Agent ${data.username} created`)
            }
        })
    }


        const handleSubmit = (event : FormEvent) =>{
            event.preventDefault()
            const formData = new FormData(event.target as HTMLFormElement);
            const username = formData.get("username") as string;
            const password = formData.get("password") as string;
        
            agentvalidate.mutate({username, password},
                {
                    onError(error){
                        console.log(error)
                    },
                    onSuccess(){
                        setIsLoggedIn(true)
                    }
                })
        }


    return(
    <div>
      { isLoggedIn ? (
        
        <form onSubmit={(e) => {
          e.preventDefault()
          clientcreate()
        }}>
          <h1>Welcome</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />

          <input type="submit" value='create client' />  
        {clientmutation.isSuccess ? (
          <p>Client successfully created</p>
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
    )
}

export default agentLogin