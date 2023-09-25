import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function Chicago() {
    
    let nav = useNavigate();
    const handleClick = () => {
        nav('/reservation');
    }

    return (
        <div>
            <p style={{ color: '#F4CE14', fontFamily: 'markazi', fontSize: '25pt',lineHeight: '25px' }}>Little Lemon <br />
                <span style={{ color: '#ECEFEE',fontSize: '18pt' }}>Chicago</span></p>
            <p style={{ width: '188px', color: '#ECEFEE', fontFamily: 'karla',lineHeight: '18px' }}>We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist</p>
            <Button variant='warning' style={{borderRadius: '10px', fontWeight: 'bold'}} onClick={()=>handleClick()}>Reserve Table</Button>
        </div>
    )
}
