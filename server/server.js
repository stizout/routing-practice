require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const app = express();
app.use(bodyParser.json());

massive(process.env.HEROKU_STRING).then(database => {
    app.set('db', database)
});

app.get('/dogs', (req, res) => {
    req.app.get('db').get_dogs().then(dogs => {
        res.json(dogs)
    }).catch(err => {
        console.log('error', err);
        res.status(500).send("There was an error on the server");
    })
    
})


app.post('/dogs', (req, res) => {
    const dog = req.body
    console.log('this is the dog',dog);
    req.app.get('db').create_dog({
        name: dog.name,
        price: dog.price,
        image: dog.image,
    }).then((newDog) => {
        res.json(newDog[0]);
        res.status(400).send('successfull');
    }).catch(err => {
        console.log(err);
        res.status(500).send('there was an error on the server');
    })
})

app.delete('/dogs/:id', (req, res) => {
    console.log('req.params.id',req.params.id)
    req.app.get('db').delete_dog(req.params.id)
    res.end();
})

app.put('/dogs/:id', (req,res) => {
    const { name, price, image } = req.body
    console.log('id', req.params.id)
    console.log('edited dog',name, price, image);
    req.app.get('db').edit_dog(req.params.id, {
        name: name,
        price: price,
        image: image,
    })
})

app.listen(4500, () => console.log("Server is running for Dogs DB"));