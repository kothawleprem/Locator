const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv");

app.use(cors())
app.use(express.json())
dotenv.config({ path: './config.env'});

// connnect to mongoose
const DB = process.env.DATABASE;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(DB,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// require route
app.use("/",require("./routes/addressRoutes"))


app.listen(5000,function(){
    console.log('server running on port 5000')
})