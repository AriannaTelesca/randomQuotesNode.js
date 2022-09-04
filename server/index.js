require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = process.env.DBurl;

mongoose.connect(mongoDB);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', ()=>{
    console.log('database connected');
})

const app = express();

app.use(express.json());
app.use(cors());


//routes
const exeRouter = require ('./routes/exe.routes.js');

app.use('/api', exeRouter);

const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})