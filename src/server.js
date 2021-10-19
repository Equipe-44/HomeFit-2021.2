const express = require('express');
const app = express();

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/controllers/projectController')(app);
require('./app/routes/routes')(app);

app.listen(process.env.PORT || PORT, () => {
   console.log(`Servidor ativo na porta: ${PORT}`);
});