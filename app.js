const express =require('express');

//express APP
const app = express();

//listening for requests
app.listen(3000);

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
    res.sendFile('./HTML/404.html', { root:__dirname })
});