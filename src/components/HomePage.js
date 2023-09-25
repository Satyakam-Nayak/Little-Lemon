import Chicago from "./Chicago"
import restauranfood from '../icons_assets/restauranfood.jpg'
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CustomersSay from "./CustomersSay"
import About from "./About"
import Footer from "./Footer"

var cont = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#495E57',
    height: '260px',
    width: '100%',
}

var dimen = {
    height: "290px",
    width: "260px",
    marginTop: "6%",
    zIndex: '1',
    borderRadius: "15px"

}

var mid = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '7%',
    marginBottom: '4%'
}

var cards = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4%'
}

const menu = [
    {
        title: "Greek Salad",
        description:
            " The famous greek salad of crispy lettuce,peppers,olives and our Chicago style feta cheese,garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        getImageSrc: () => require("../icons_assets/greek salad.jpg"),
    },
    {
        title: "Bruchetta",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        price: "$5.99",
        getImageSrc: () => require("../icons_assets/Bruschetta.jpg"),
    },
    {
        title: "Lemon Dessert",
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        price: "$5.00",
        getImageSrc: () => require("../icons_assets/lemon dessert.jpg"),
    }
]

export default function HomePage() {

    let nav = useNavigate();

    const handleClick = () => {
        nav('/menu');
    }

    return (
        <div>
            <div style={cont}>
                <Chicago />
                <img src={restauranfood} alt="no img" style={dimen} />
            </div>
            <div style={mid}>
                <h1>This weeks specials!</h1>
                <Button variant='warning' style={{ borderRadius: '10px', fontWeight: 'bold' }} onClick={() => handleClick()}>Online Menu</Button>
            </div>
            <div style={cards}>
                {
                    menu.map((items, key) =>
                        <Card style={{ width: '16rem', backgroundColor: '#EDEFEE', marginRight: '2%' }}>
                            <Card.Img variant="top" src={items.getImageSrc()} />
                            <Card.Body>
                                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Title>{items.price}</Card.Title>
                                </div>
                                <Card.Text>{items.description}</Card.Text>
                                <Button variant="primary">Order a delivery</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
            <div>
                <CustomersSay />
            </div>
            <div>
                <About />
            </div>
            <div style={{ backgroundColor: '#EDEFEE', paddingLeft: "20%", paddingTop: "3%", paddingBottom: "3%" }}>
                <Footer />
            </div>
        </div>

    )
}