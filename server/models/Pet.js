const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

// petSchema
// username {String, required, unique, trim}
// email {String, required, unique, match}
// password {String, required, minlength: 8}
// petType {String, required, trim}
// image {String}
// age {Number}
// sex {String, required}
// bio {string, required}
// adoptable {boolean}
// posts [{ref Post}]
// friends [{ ref Pet}]
// include a virtual for friendCount see logic at the bottom of user in Deep-Thoughts

// see the logic in Deep-Thoughts for the password encryption logic