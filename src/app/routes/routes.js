const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../controllers/authController');

const router = express.Router();
const User = require('../models/user');

// const authMiddleware = require('../middlewares/auth');


// *********** MAIN ***********

// router.get('/', authMiddleware, (req, res)  => {
//   res.send({ ok: true, user: req.userId });
//   next();
// });


// *********** CADASTRO ***********

router.post('/register', async (req, res) => {

   const { email } = req.body;

   try {
    
    if(await User.findOne({ email })) {
      
     return res.status(400).send({ error: 'User already exists' });
      
    } else {

     const user = await User.create(req.body);
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


// *********** LOGIN ***********


router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user) 
   return res.status(400).send({ error: 'User not found'});
  
  if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid password'});

  user.password = undefined;
  
  res.send({ 
    user, 
    token: generateToken({ id: user.id })
  });

});


module.exports = app => app.use('/user', router);