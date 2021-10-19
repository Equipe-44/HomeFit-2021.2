const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/homeFit');
mongoose.Promise = global.Promise;

module.exports = mongoose;