const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const generateToken = require('../../controllers/authController');

router.post('/register', async (req, res) => {

    const { email } = req.body;
 
    try {
     
     if(await User.findOne({ email })) {
       
      return res.status(400).send({ error: 'User already exists' });
       
     } else {
 
      const user = await User.insertOne(req.body);
      user.password = undefined;
 
      return res.send({ 
        user,
        token: generateToken({ id: user.id })
     });
 
     }
 
    } catch (err) {
      
      return res.status(400).send({ error: err });
    }
 });
 
 module.exports = app => app.use(router);