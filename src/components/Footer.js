import footerlogo from '../icons_assets/footerlogo.png'
import { NavLink } from "react-router-dom"

var cont = {
    display: 'flex',
    justifyContent: "space-evenly",
    padding: '1%',
    width: "1000px"
}

var subcont={
    listStyle: "none"
}

var tag={
    fontSize: '15px',
    textDecoration: "none",
    color: 'black',
}

export default function Footer(){

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

    return(
        <div style={cont}>
            <img src={footerlogo} alt='noimg' height='180px' width='150px'/>
            <div>
                <h4>Explore</h4>
                <NavLink to='/' style={tag}>Home</NavLink><br/>
                <NavLink to='/' onClick={handleClick('about')} style={tag}>About</NavLink><br/>
                <NavLink to='/menu'  style={tag}>Menu</NavLink><br/>
                <NavLink to='/reservation'  style={tag}>Reservation</NavLink><br/>
                <NavLink to='/orderonline'  style={tag}>Order Online</NavLink><br/>
            </div>
            <div>
                <h4>Contact</h4>
                <span>Bhubaneswar,751002</span><br/>
                <span>+91-8249327494</span><br/>
                <span>little-lemon@gmail.com</span><br/>
            </div>
            <div>
                <h4>Follow us</h4>
                <span>Twitter</span><br/>
                <span>INstagram</span><br/>
                <span>Facebook</span><br/>
            </div>
        </div>
    )
}