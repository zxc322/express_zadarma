const { zadarma_express_handler } = require("zadarma");

const express = require('express');

const app = express();

const ZADARMA_SECRET_KEY = "1fd7db34b11628bf991d"
const ZADARMA_API_KEY = "e0343bcbd2832666dbbc"


zadarma_express_handler.on('SMS', request => {
    console.log(request);
});

app.use('/zadarma', zadarma_express_handler);
app.listen(3000);
