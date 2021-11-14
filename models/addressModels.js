const mongoose = require('mongoose')

const addressSchema = {
    title:String,
    address:String,
    landmark:String,
    latlng:String,
    ola:String,
    restaurant:String,
    grocery:String,
    navigate:String,
    pharmacies:String,
    gas:String
}

const Address = mongoose.model("Locator",addressSchema)

module.exports = Address