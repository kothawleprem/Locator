const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


// connnect to mongoose
const DB = 'mongodb+srv://admin:admin@cluster0.0wl69.mongodb.net/locator?retryWrites=true&w=majority'

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


app.listen(port,function(){
    console.log('server running on port 5000')
})