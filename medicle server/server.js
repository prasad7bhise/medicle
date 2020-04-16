const express = require('express')
const routerAdmin = require('./routes/admin')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use('/user', routerAdmin)

app.listen(4000, '0.0.0.0', () => 
{
    console.log('server started on port 4000')
})