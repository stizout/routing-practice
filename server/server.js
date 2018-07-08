const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
});

app.get('/dogs', (req, res) => {
    req.app.get('db').get_dogs().then(dogs => {
        console.log("heroes", dogs)
        res.json(dogs)
    }).catch(err => {
        console.log('error', err);
        res.status(500).send("There was an error on the server");
    })
    
})
// app.get('/api/movies', (req, res) => {
//     req.app.get('db').get_movies().then(movies => {
//         // console.log(movies)
//         res.json(movies)
//     }).catch(err => {
//         console.log("error", err)
//         res.status(500).send("There was an error on the server");
//     });
   
// });


// app.post('/api/dogs', (req, res) => {
//     const dog = req.body
//     req.app.get('db').createdogs({
//         name: dog.name,
//         price: dog.price,
//         image: dog.image,
//     }).then((newDog) => {
//         res.json(newDog[0]);
//         res.status(400).send('successfull');
//     }).catch(err => {
//         console.log(err);
//         res.status(500).send('there was an error on the server');
//     })
// })

app.listen(4500, () => console.log("Server is running for Dogs DB"));