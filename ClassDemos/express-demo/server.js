const express = require('express');
// we need to create an app where everything will run
const app = express();
// we are going to set up a port
const port = 8000;
// you need these lines of code for post requests to work
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// this is the example database
const users = [
    {name:"Dave", favoriteLanguage: 'C#'},
    {name:"Sean", favoriteLanguage: 'Javascript'},
    {name:"Hiyaw", favoriteLanguage: 'C#'}
]



app.get('/', (req, res) => {
    res.json({message: 'hello from the other side'})
})

app.get('/example', (req, res) => {
    res.json({message:"hello from the example page", number: 8})
})

app.post('/post', (req, res) => {
    console.log(req.body);
    users.push(req.body)
    // this must be here or postman hangs forever
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    res.json(users[req.params.id])
})




// we need to start up our server
app.listen(port, () => console.log(`Running on port ${port}!`))