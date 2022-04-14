const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.get('/getCookie', (req,res) => {
    res.json({Token : true})
})

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});