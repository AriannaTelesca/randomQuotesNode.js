const mongoose = require("mongoose");
const apiQuotes = require("../api/functionQuotes");

const quoteDB = mongoose.createConnection('mongodb+srv://admin:quotes@cluster0.aldfyn6.mongodb.net/test');

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


// quoteDB.collection("test").insertMany(apiQuotes, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     quoteDB.close();
//   });

module.exports = Quotes;