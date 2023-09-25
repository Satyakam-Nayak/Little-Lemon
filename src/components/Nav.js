import { NavLink, useNavigate } from "react-router-dom"
import logo from '../icons_assets/Logo.svg';

var maincont = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '1vh'
}

var subcont = {
    display: "flex",
    listStyle: "none"
}

var tag = {
    margin: "2vh",
    fontSize: '18px',
    textDecoration: "none",
    color: 'black',
    fontWeight: 'bold',
}

export default function Nav() {

    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    let nav = useNavigate();

    function logout() {
        localStorage.clear();
        nav('/login');
    }

    return (
        <div style={maincont}>
            <img src={logo} alt="logo" />
            <div style={subcont} >
                {
                    localStorage.getItem("user") ?
                        <>
                            <NavLink to='/' style={tag}>Home</NavLink>
                            <NavLink to='/' onClick={handleClick('about')} style={tag}>About</NavLink>
                            <NavLink to='/menu' style={tag}>Menu</NavLink>
                            <NavLink to='/reservation' style={tag}>Reservation</NavLink>
                            <NavLink to='/orderonline' style={tag}>Order Online</NavLink>
                            <NavLink onClick={logout} style={tag}>Logout</NavLink>
                        </>
                        :
                        <div>
                            <NavLink to='/login' style={tag}>Login</NavLink>
                            <NavLink to='/register' style={tag}>Register</NavLink>
                        </div>
                }
            </div>
        </div>
    )
}
