const express = require("express")
const router = express.Router()
const Address = require("../models/addressModels")

router.route("/create").post((req,res) => {
    const title = req.body.title
    const address = req.body.address
    const landmark = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBonEm9k9dZ4T9k6cZHWGzCYGupxNQgwBc&q=" + req.body.landmark
    const ll = req.body.latlng
    var latlng = undefined
    var ola = undefined
    var navigate = undefined
    var grocery = undefined
    var pharmacies = undefined
    var restaurant = undefined
    var gas = undefined
    if(ll.length > 0){
        latlng ="https://www.google.com/maps/embed/v1/place?key=AIzaSyBonEm9k9dZ4T9k6cZHWGzCYGupxNQgwBc&q=" + ll
        navigate = "https://www.google.com/maps/dir//" + ll
        grocery = "https://www.google.com/maps/search/Groceries/@" + ll
        pharmacies = "https://www.google.com/maps/search/Pharmacies/@" + ll
        gas = "https://www.google.com/maps/search/Gas/@" + ll
        restaurant = "https://www.google.com/maps/search/Restaurants/@" + ll
        const llArray = ll.split(", ");
        ola = "https://book.olacabs.com?pickup_name=Current%20Location&drop_lat=" + llArray[0] + "&drop_lng=" + llArray[1]
    }
    const newAddress = new Address({
        title,
        address,
        landmark,
        latlng,
        ola,
        restaurant,
        grocery,
        navigate,
        pharmacies,
        gas
    })
    newAddress.save()
})

router.route("/locations").get((req,res) => {
    Address.find()
    .then(foundAddress => res.json(foundAddress))
})

module.exports = router