const express = require('express');
const app = express();
const routes = require('./app/routes/routes');
const cors = require('cors')

app.use(cors());

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});