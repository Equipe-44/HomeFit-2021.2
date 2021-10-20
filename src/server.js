const express = require('express');
const app = express();
const routes = require('./app/routes/routes');

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});