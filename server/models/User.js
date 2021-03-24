const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const pet = require('./Pet');
// userSchema
// username {String, required, unique, trim}
// email {String, required, unique, match}
// password {String, required, minlength: 8}
// pets [{ ref: PET}]

const userSchema = new Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
          trim: true
        },
        email: {
          type: String,
          required: true,
          unique: true,
          match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
          type: String,
          required: true,
          minlength: 5
        },
        pets: [Pet]
    },
    {
        toJSON: {
          virtuals: true
        }
      }
)

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;

// see the logic in Deep-Thoughts for the password encryption logic