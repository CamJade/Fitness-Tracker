const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');

//set up express to variable
const app = express();

//set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//connect to mongodb
mongoose.connect(process.env.mongodb_uri || 'mongodb://localhost/workout', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});