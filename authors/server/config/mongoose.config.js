const mongoose = require('mongoose');

// db name after local host should always be unique and specifc
mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));