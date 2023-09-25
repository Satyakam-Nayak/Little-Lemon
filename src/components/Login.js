import { useState } from "react"
import restaurant from '../icons_assets/restaurant.jpg'
import { ToastContainer, toast } from 'react-toastify';
import {Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

var cont={
    display: 'flex',
    justifyContent: 'space-evenly',
}

var input={
    border: 'none',
    borderRadius: '10px',
    color: '#495E57',
    fontWeight: 'bold',
    padding: '8px',
    backgroundColor: '#EDEFEE',
    boxShadow: "0px 5px 25px 0px",
    outline: "none",
    margin: "10px 0px 20px 0px",
    width: "130%"
}
var form={
    margin: "15% 0px 0px 0px"
}

var img={
    margin: "10% 0px 0px 0px"
}


export default function Login()
{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let nav = useNavigate();

    async function login()
    {
        toast('Logged In');
        localStorage.setItem('user', true);
        nav('/');
    }

    return(
        <div style={cont}>
            <img src={restaurant} alt="no img" height="350px" width="450px" style={img}/>
            <form style={form}>
                <input type="email" placeholder="Username" style={input} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" placeholder="password" style={input} onChange={(e)=>setPassword(e.target.value)}/> <br/>
                <Button onClick={login} style={{margin: "10px 0px 0px 120px"}}>Login</Button>
            </form>
            <ToastContainer />
        </div>
        
    )
   
}