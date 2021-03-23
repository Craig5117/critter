const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

// userSchema
// username {String, required, unique, trim}
// email {String, required, unique, match}
// password {String, required, minlength: 8}
// pets [{ ref: PET}]



// see the logic in Deep-Thoughts for the password encryption logic