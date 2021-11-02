const express = require('express');
const authMiddleware = require('../../controllers/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res)  => {
    res.send({ ok: true, Id: req.userId });
});

module.exports = app => app.use(router);