import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import restaurant from '../icons_assets/restaurant.jpg';
import mario1 from '../icons_assets/Mario and Adrian A.jpg';
import mario2 from '../icons_assets/Mario and Adrian b.jpg';
import Carousel from 'react-bootstrap/Carousel';

var form = {
    display: 'grid',
    maxWidth: '310px',
    gap: '15px',
    fontSize: '23px',
    padding: "0px 0px 0px 10px"
}

var div = {
    display: 'block',
    margin: '4% 30% 50px 40%',
}

var cont = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '5% 0px 0px 0px',
}

var inputbox = {
    border: 'none',
    borderRadius: '10px',
    color: '#495E57',
    fontWeight: 'bold',
    padding: '8px',
    backgroundColor: '#EDEFEE',
    boxShadow: "0px 5px 25px 0px",
    outline: "none",
}

export default function BookingPage() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const nav = useNavigate();


    async function reservetable() {
        toast('Table Reserved')
        let result = await fetch('http://localhost:5000/reservations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, time, guests, occasion })
        });
        result = await result.json();
        nav('/')
    }

    return (
        <div style={cont}>
            {/* <img src={restaurant} style={{margin:'7% 0px 0px 0px'}} alt="no img" height='350px' width='450px'/> */}
            <Carousel style={{margin:'7% 0px 0px 0px', height: '350px', width: '450px'}}>
                <Carousel.Item interval={2000}>
                    <img
                        height='350px' width='450px'
                        src={restaurant}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        height='350px' width='450px'
                        src={mario1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        height='350px' width='450px'
                        src={mario2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <h1 style={{ marginBottom: '8%', fontFamily: 'markazi' }}>Table Reservation</h1>
                <form style={form}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)} style={inputbox} />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " onChange={(e) => setTime(e.target.value)} style={inputbox}>
                        <option style={{ color: '#495E57' }}>17:00</option>
                        <option style={{ color: '#495E57' }}>18:00</option>
                        <option style={{ color: '#495E57' }}>19:00</option>
                        <option style={{ color: '#495E57' }}>20:00</option>
                        <option style={{ color: '#495E57' }}>21:00</option>
                        <option style={{ color: '#495E57' }}>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)} style={inputbox} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={(e) => setOccasion(e.target.value)} style={inputbox}>
                        <option>Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                    <Button variant="danger" style={{ margin: '4%', marginLeft: '16%', width: '200px' }} onClick={reservetable}>Make Your reservation</Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}