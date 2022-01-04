const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

const htmlRoutes = require('./Develop/routes/html');
const apiRoutes = require('./Develop/routes/api');

//set up express to variable
const app = express();

//set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static('public'));

//connect to mongodb
mongoose.connect(process.env.mongodb_uri || 'mongodb://localhost/fitnessTracker', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

// import routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});