const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3080;

// const connectToDatabase = require('./dataBase/config');
// connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(require('./app/routes/routes'));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});