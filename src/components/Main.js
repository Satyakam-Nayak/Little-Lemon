import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Protected Cmp={HomePage} />} />
                <Route path='/menu' element={<Protected Cmp={Menu} />} />
                <Route path='/reservation' element={<Protected Cmp={BookingPage} />} />
                <Route path='/chicago' element={<Protected Cmp={Chicago} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>

    )
}