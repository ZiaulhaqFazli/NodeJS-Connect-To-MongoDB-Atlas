const express = require('express');
const app = express();
const port = 3000;

//Set the view engine
app.set('view engine', 'ejs');
//Set your views directory in the sencond argument.
app.set('views', 'views');

//Mongoose module
const mongoose = require('mongoose');
const Blog = require('./models/blog');
//Connection String of Mongo Atlas
const dbURI = "mongodb+srv://ziaulhaq:Galaxy58P@mongocluster.wcymfq3.mongodb.net/node-db?retryWrites=true&w=majority";
//Mongoose connect function
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, console.log("Server is Started!")))
    .catch((error) => console.log("Error")) ;

mongoose.set('strictQuery', false);

//
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//Add a Dummy Blog
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'My Blog 2 ',
        body: 'Information About Me!!!'
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error);
        });
});

//Get All Blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs!', blogs: result })
        })
        .catch((error) => {
            console.log(error);
        });
});


//Get Single Blog
app.get('/single-blog', (req, res) => {
    Blog.findById('63da14c29843b5f457a66fa2')
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error);
        });
});
