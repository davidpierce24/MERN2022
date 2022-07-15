const express = require('express');
// we need to create an app where everything will run
const app = express();
// we are going to set up a port
const port = 8000;

app.get('/', (req, res) => {
    res.json({message: 'hello from the other side'})
})

app.get('/example', (req, res) => {
    res.json({message:"hello from the example page", number: 8})
})





// we need to start up our server
app.listen(port, () => console.log(`Running on port ${port}!`))