const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Practice server is On........')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Port runnin at ${port}`);
})