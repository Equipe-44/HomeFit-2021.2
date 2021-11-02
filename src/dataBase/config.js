require("dotenv").config();

const mongoose = require('mongoose');

mongoose.connect(
  
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

).then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;