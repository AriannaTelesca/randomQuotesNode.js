const router = require('express').Router();
const apiQuotes = require('../api/functionQuotes');
let Model = require('../models/model');


//post
router.post('/post',(req, res) => {

    const author = req.body.author;
    const quote = req.body.quote;

    const newQuote = new Model ({
        author,
        quote,
    });

    newQuote.save()
    .then(() => res.json('Quote added'))
    .catch(err => res.status(400).json('Error' +err))
});


//GET
router.get("/getAll",(req, res) =>{
    Model.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
});

//Get by Author
router.get("/:author",(req, res,)=>{
    Model.find({author: req.params.author})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
});

// //Get by ID Method
 

module.exports = router;