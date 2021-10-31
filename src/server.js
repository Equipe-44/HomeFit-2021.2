const express = require('express');
const app = express();

// const mongoose = require('./dataBase/config')

require("dotenv").config();

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: false,
  }
).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

mongoose.Promise = global.Promise;

const cors = require('cors')

const PORT = 3080;

app.use(cors());
app.use(express.json());
app.use(require('./app/routes/routes'));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});