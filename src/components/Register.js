import { useState } from "react"
import restaurant from '../icons_assets/restaurant.jpg'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

var cont = {
    display: 'flex',
    justifyContent: 'space-evenly',
}

var input = {
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
var form = {
    margin: "12% 0px 0px 0px"
}

var img = {
    margin: "10% 0px 0px 0px"
}


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [profilepic, setProfilepic] = useState("")
    
    let nav = useNavigate();

    // async function register() {
    //     toast('Register');
    //     let result = await fetch('http://localhost:5000/register', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name,phone,email,password })
    //     });
    //     result = await result.json();
    //     nav('/');
    // }

    async function register() {
        if (name && email && password.length > 7 && phone) {
            let formdata = new FormData();
            formdata.append('name',name);
            formdata.append('email',email);
            formdata.append('phone',phone);
            formdata.append('password',password);
            formdata.append('profilepic',profilepic);
            let result = await fetch("http://localhost:5000", {
                method: "POST",
                body: formdata
            })
            result = await result.json();
            if (result.auth) {
                toast.success('Registration Successful')
                localStorage.setItem("userinfo", JSON.stringify(result.data));
                localStorage.setItem("token", JSON.stringify(result.auth));
                localStorage.setItem('user', true);
                nav("/")
            }
            else {
                toast.error('Email already exists');
            }
        }
        else {
            toast.error('Enter details correctly')
        }
    }

    return (
        <div style={cont}>
            <img src={restaurant} alt="no img" height="350px" width="450px" style={img} />
            <form style={form}>
                <input type="text" placeholder="name" style={input} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="email" placeholder="Username" style={input} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="password" style={input} onChange={(e) => setPassword(e.target.value)} /> <br />
                <input type="number" placeholder="phone" style={input} onChange={(e) => setPhone(e.target.value)} /> <br />
                <input type="file" name="profilepic" style={input} onChange={(e) => setProfilepic(e.target.files[0])} /><br />
                <Button onClick={register} style={{ margin: "10px 0px 0px 120px" }}>Register</Button>
            </form>
            <ToastContainer />
        </div>

    )

}