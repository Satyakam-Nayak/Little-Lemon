const express = require('express');
require('./database-con/config');
const app = express();
const menuModel = require('./database-con/menuSchema');
const reviewModel = require('./database-con/reviewSchema');
const reservationModel = require('./database-con/reservationSchema');
const registerModel = require('./database-con/registerSchema');
const cors = require('cors');
const multer = require('multer');

app.use(express.json());
app.use(cors());

app.use('/profile-photos', express.static('profile-photos'));
app.use('/menu-photos', express.static('menu-photos'));

const uploadProfilePic = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'profile-photos')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
        }
    })
}).single('profilepic');

const uploadMenu = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'menu-photos')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
        }
    })
}).single('menu')

app.get('/menu',uploadMenu,async (req, resp) => {
    let menu = await menuModel.find()
    resp.send(menu);
})

app.get('/testimonials',async (req, resp) => {
    let review = await reviewModel.find()
    resp.send(review);
})

app.post('/reservations',async (req,resp) => {
    let result = new reservationModel({
        date: req.body.date,
        time: req.body.time,
        guest: req.body.guests,
        occasion: req.body.occasion,
    });
    result = await result.save();
    resp.send(result);
})

app.post('/register',uploadProfilePic,async (req, resp) => {
    let result = new registerModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    });
    result = await result.save();
    resp.send(result);
})


app.listen(5000);