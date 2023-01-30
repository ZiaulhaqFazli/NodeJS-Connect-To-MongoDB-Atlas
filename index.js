const express = require('express');
const app = express();
const port = 3000;

//Mongoose module
const mongoose = require('mongoose');
//Connection String of Mongo Atlas
const dbURI = "mongodb+srv://ziaulhaq:Galaxy58P@mongocluster.wcymfq3.mongodb.net/?retryWrites=true&w=majority";
//Mongoose connect function
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, console.log("Server is Started!")))
    .catch((error) => console.log("Error")) 

