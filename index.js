// EXPRESS EXAMPLE
//

const express = require('express');    // core node module



const app = express();

//for form you really need this stuff, if bulding with api you need the 2. the two is highly important
app.use(express.urlencoded ({extended: false}));
app.use(express.json())

const homeRoute = require('./routes/app.routes')
const studentRoute = require('./routes/students.routes')


// ejs - renders ejs on the server side
// note: dafault demplate is html

// TO call ejs
app.set('view engine', 'ejs');
app.set('views', 'views');   // first views is a constant, second is the view folder we created

// here we set below in all situations for forms 
// for api's

app.use('/static', express.static('./public'));  // or
// app.use('./', express.static('./public'));

// ROUTES
app.use('/', homeRoute);
app.use('/students', studentRoute)

// to create our ROUTES
// home
// app.get('/', (req,res,next ) => {
//     res.send('<h1>Welcome to my express app ✔✔✔</h1>')
// });
// // about
// app.get('/about', (req,res,next ) => {
//     res.send('<h1>Welcome to my about section</h1>')
// });
// // contact
// app.get('/contact', (req,res,next ) => {
//     res.send('<h1>Welcome to my contact section</h1>')
// });


// QUERY PARAMETERS  - helps us to single out an element from a list e.g 1d and list from api 
// this is the mechanism behind username search on github et al
// app.get('/students', (req,res,next ) => {
//     res.send('students');
// });
// app.get('./students/:id/:name',  (req,res,next ) => {
//     res.send(`student number ${req.params.id}`);
// })
// // to create our API where we send / retireve data, and here we dont convert to json (express does this)
// // to display a server result, we add status 200
// app.get('/api/students', (req, res, next) => {
//     // res.json({
//         res.status(200).json({
//         data,
//     })
// })
// to check our api resul;t on our browser use http://127.0.0.1:3000/api/students

// There is a method call all that checks for get, post, patch, delete, to check for this:

// handle 404 error on get
// app.get('*', (req, res, next) => {
//     res.send('<h1>404 page not found 😢😢😢</h1')
// })

// // handle all https error , an so on for post and delete
// app.all('*', (req, res, next) => {
//     res.send('<h1>404 page not found 😢😢😢</h1')
// })




// to create our express server
const PORT = 3000
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
});    // to run our server   nodemon index (don't use node index (will not display))

// next, go to our browser and http://127.0.0.1:3000/  (cannot get) or localhost:3000