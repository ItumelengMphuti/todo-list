const express =require('express');
const mongoose = require('mongoose');
//express APP
const app = express();

// connect mongodb
const dbURI = 'mongodb+srv://ItumelengM:961002M@cluster0.0g058t0.mongodb.net/Todo_list?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.sendFile('./HTML/index.html', { root:__dirname });
});
app.get('/tasks.html', (req, res) => {
    res.sendFile('./HTML/tasks.html', { root:__dirname });
});

app.get('/signup.html', (req, res) => {
    res.sendFile('./HTML/signup.html', { root:__dirname });
});
// 404 page (always at the bottom!)
app.use((req, res) => {
    res.sendFile('./HTML/404.html', { root:__dirname });
});