import { useState } from "react"

export const Form = ()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [user,setUser]=useState([])

    const submitForm = (e)=>{   
        e.preventDefault()
        const newUser = {email:email,password:password}

        setUser([...user, newUser])
        console.log(user)
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email </label>
                <input name="email" type="email" autoComplete="off" 
                placeholder="enter email address" value={email}
                onChange={(event)=>setEmail(event.target.value)}></input>                
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input name="password" type="password" value={password}
                onChange={(event)=>setPassword(event.target.value)} ></input>                
            </div>
            <button type="submit"> Submit</button>
        </form>

        <div>
            {
                user.map((item)=>{
                    return<div>
                        
                    <p>{item.email}</p>
                    <p>{item.password}</p>
                    </div>
                })
            }
        </div>
        </>
    )
}