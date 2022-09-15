require('dotenv').config();
const mongoose = require("mongoose");
const apiQuotes = require("../api/functionQuotes");
const mongoDB = process.env.DBurl;


const quoteDB = mongoose.createConnection(mongoDB);

const Quotes = quoteDB.model(
    'Quotes',
    new mongoose.Schema({
    author : {
        type : String
    },
    quote : {
        type : String
    },
}, {collection: 'test'})
);

    quoteDB.collection('test').deleteMany();
    quoteDB.collection("test").insertMany(apiQuotes, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    });

module.exports = Quotes;
