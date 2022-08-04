import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

export const SemanticForm = ()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [user,setUser]=useState([])
    const navigate = useNavigate()

    const submitForm = (e)=>{   
        e.preventDefault()
        const newUser = {email:email,password:password}

        setUser([...user, newUser])
        console.log(user)

 
        
        navigate('/home')
                
    }

    return(
        <Form onSubmit={submitForm}>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' type="email" autoComplete="off"
           value={email} onChange={(event)=>setEmail(event.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='password' type="password" autoComplete="off"
           value={password} onChange={(event)=>setPassword(event.target.value)} />
        </Form.Field>
        
        <Button color='black' type='submit'>Submit</Button>
      </Form>
        // <>
        // <form onSubmit={submitForm}>
        //     <div>
        //         <label htmlFor="email">Email </label>
        //         <input name="email" type="email" autoComplete="off" 
        //         placeholder="enter email address" value={email}
        //         onChange={(event)=>setEmail(event.target.value)}></input>                
        //     </div>
        //     <div>
        //         <label htmlFor="password">Password </label>
        //         <input name="password" type="password" value={password}
        //         onChange={(event)=>setPassword(event.target.value)} ></input>                
        //     </div>
        //     <button type="submit"> Submit</button>
        // </form>

        // </>
        
    )
}