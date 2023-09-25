import { useEffect, useState } from "react"
import { Card } from "react-bootstrap";

var card = { 
    width: '10rem', 
    alignItems: 'center',
    marginBottom: "30%"
}

var div = { 
    display: 'grid', 
    gridTemplateColumns: 'auto auto auto auto',
    margin: '3%',
    marginLeft: '20%',
    width: "1000px"
}

export default function CustomersSay() {

    const [data, setData] = useState([]);

    useEffect(() => {
        review();
    }, [])

    async function review() {
        let result = await fetch("http://localhost:5000/testimonials");
        result = await result.json();
        setData(result)
    }

    return (
        <div style={{ backgroundColor: '#EDEFEE' }}>
            <h2 style={{paddingTop: '4%',textAlign: 'center',fontFamily: 'markazi'}}>Testimonial</h2>
            <div style={div}>
                {
                    data.map((items, key) =>
                        <Card style={card}>
                            <Card.Body>
                                <Card.Text>{items.rating}</Card.Text>
                                <Card.Text>{items.name}</Card.Text>
                                <Card.Text>{items.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}