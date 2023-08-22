const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/productos', (req, res) => {
    axios.get('https://fakestoreapi.com/products')
        .then(resp => resp.data)
        .then(data => {
            res.header("Access-Control-Allow-Origin", "*")
            res.send(data);
        });
});