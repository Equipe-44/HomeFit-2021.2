require("dotenv").config();

const mongoose = require('mongoose');

// function connectToDatabase() {

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

mongoose.Promise = global.Promise;

// }
module.exports = mongoose;
// module.exports = app => app.use(mongoose);