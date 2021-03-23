const express = require('express');
const data = require('../data');

const router = express.Router()

router.get('/', (req,res,next ) => {
    res.render('students/student-list.ejs', {
        title: 'Students',
        students: data,
    });
});


// QUERY SELECTOR
router.get('./:id/:name',  (req,res,next ) => {
    res.send(`student number ${req.params.id}`);
})


// to create our API where we send / retireve data, and here we dont convert to json (express does this)
// to display a server result, we add status 200
router.get('/api/students', (req, res, next) => {
    // res.json({
        res.status(200).json({
        data,
    })
})

module.exports = router;