import restaurant from '../icons_assets/restaurant.jpg'

var cont={
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1% 0px 4% 0px',
}

export default function About() {
    return (
        <div id='about' style={cont}>
            <div style={{marginTop: '5%'}}>
                <p style={{ fontFamily: 'markazi', fontSize: '25pt', lineHeight: '25px' }}>Little Lemon <br />
                    <span style={{ fontSize: '18pt' }}>Chicago</span></p>
                <p style={{ width: '188px', fontFamily: 'karla', lineHeight: '18px' }}>We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist</p>
            </div>
            <img src={restaurant} alt='no photo' height='300px' width='500px' />
        </div>
    )
}