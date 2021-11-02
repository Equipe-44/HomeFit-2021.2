const express = require('express');

const router = express.Router();


// *********** User ***********

require('./user/register')(router);

require('./user/login')(router);


// *********** Workouts ***********

require('./workouts/home')(router);


module.exports = router;
