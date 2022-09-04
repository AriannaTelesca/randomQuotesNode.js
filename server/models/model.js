const mongoose = require("mongoose");

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

module.exports = Quotes;