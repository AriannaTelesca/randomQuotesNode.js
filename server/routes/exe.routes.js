const router = require('express').Router();
const apiQuotes = require('../api/functionQuotes');
let Model = require('../models/model');

//Post Method
// router.post('/post', (req, res) => {
//   res.send('Post API')
// })

// //Get all Method
// router.get('/getAll', (req, res) => {
//   res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//   res.send('Get by ID API')
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//   res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//   res.send('Delete by ID API')
// })


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

// router.get("/getAll", async (req, res) => {
//     try {
//       res.status(200).json(apiQuotes);
//     } catch (error) {
//       res.status(500).json("no results");
//     }
//   });

  

module.exports = router;