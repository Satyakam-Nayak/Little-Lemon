import { useEffect, useState } from "react"
import { Card, Button } from 'react-bootstrap'

var card = { 
    width: '16rem', 
    backgroundColor: '#EDEFEE', 
    marginRight: '2%',
    marginBottom: '10%',
}

var div = { 
    display: 'grid', 
    gridTemplateColumns: 'auto auto auto auto auto',
    margin: '3%',
}

var header={ 
    textAlign: 'center',
    margin: '2%'
}


export default function Menu() {

    const [data, setData] = useState([]);

    useEffect(() => {
        list()
    }, [])

    async function list() {
        let result = await fetch("http://localhost:5000/menu");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <h1 style={header}>Little-Lemon Menu</h1>
            <div style={div}>
            {
                data.map((items, key) =>
                    <Card style={card}>
                        {/* <Card.Img variant="top" src={items.getImageSrc()} /> */}
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Title>{items.price}</Card.Title>
                            <Card.Text>{items.category}</Card.Text>
                            <Card.Text>{items.rating}</Card.Text>
                            <Button variant="primary">Order a delivery</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
        </div>
    )
}