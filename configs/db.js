const mongoose = require('mongoose')

const DBCONNECTION = process.env.DB || 'mongodb://localhost/chapati'

mongoose
    .connect(DBCONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });