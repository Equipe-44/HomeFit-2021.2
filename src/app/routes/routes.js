const express = require('express');

const router = express.Router();


// *********** CADASTRO ***********

require('./user/register')(router);

// *********** LOGIN ***********

require('./user/login')(router);


// *********** HOME ***********

require('./workouts/home')(router);


module.exports = router;
