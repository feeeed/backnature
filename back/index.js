require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const {routes} = require('./src/routes')
//bd connection
mongoose.connect(process.env.MONGO_URL, {

    }
);
//inizialization
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

routes.forEach(item =>{
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
});

//routes
const PORT = 3000
http.createServer({},app).listen(PORT)
console.log(`server is run ${PORT}`)
