const mongoose = require('../../dataBase/config');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
   
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    age: {
      type: Number,
      require: true,
    },
    height: {
      type: Number,
      require: true,
    },
    weight: {
      type: Number,
      require: true,
    },
    imc: {
      type: Number,
      require: false,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }

});

UserSchema.pre('save', async function(next) {
   const hash = await bcrypt.hash(this.password, 10);
   this.password = hash;

   next();
});

UserSchema.pre('save', async function(next) {
    var calc = this.peso / (this.altura * this.altura);
    this.imc = calc;
 
    next();
 });

const User = mongoose.model('User', UserSchema);

module.exports = User;