const express = require('express');
const app = express();

const cors = require('cors')

const PORT = 3080;

app.use(cors());
app.use(express.json());
app.use(require('./app/routes/routes'));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});