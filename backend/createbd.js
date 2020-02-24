const mongoose = require('mongoose');
const DonationModel = require('./models/donation');
const db = require('./components/db');


console.log(DonationModel.find().then((e) => {
    console.log(e)
}));

mongoose.set('useNewUrlParser', true);

db.then(() => {
    let person = new DonationModel({amount: 1000, currency: "USD"});
    console.log(person.save().then(e => {
        console.log(e)
    }).catch((e) => {
        console.log(e)
    }))
})
    .catch((e) => {


        console.log(e)

    });

