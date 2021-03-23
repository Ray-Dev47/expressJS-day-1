// router helps us handles only 
const express = require('express');


// to make our route work
const router = express.Router()


router.get('/', (req,res,next ) => {
    // console.log('....');
    // res.send('res.send('<h1>Welcome to my express router ✔✔✔</h1>')');
    // we can also pass data/info from our server to ejs
    res.render('index.ejs', {
        title: 'Home 😁😁😁'
    })
});
// about
router.get('/about', (req,res,next ) => {
    // res.send('<h1>Welcome to my about section</h1>')
    res.render('about.ejs', {
        title: 'about 😎😎😎',
        about: "about"
    })
});
// contact
router.get('/contact', (req,res,next ) => {
    res.render('contact.ejs', {
        title: 'contact 😋',
        contact: 'contact'
    } )
});

router.post('/message', (req,res,next) =>{
    // console.log(req.body);
    res.send(req.body);
});

module.exports = router;
