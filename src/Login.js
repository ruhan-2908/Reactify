import { useState } from "react"

export default function Login()
{   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    function signInHandler()
    {
        if(email=='ruhankb29@gmail.com' && password == 'ruhankb')
        {
            setMessage("Loading...")
            setTimeout(()=>{
                setMessage("Successfully LoggedIn!");
            },3000)
            
        }else{

            setMessage("Loading")
            setTimeout(()=>{
                setMessage("Invalid Credentials!!");
            },3000)
        }
    }
    return <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input> <br/>
        <input type="text" placeholder="Password"onChange={(e) => setPassword(e.target.value)} ></input> <br/>
        <button onClick={signInHandler}>Sign In</button>
        {message && <p>{message}</p>}
    </div>
}