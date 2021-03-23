const { Schema, model} = require('mongoose');

// petSchema
// petUsername {String, required, unique, trim}
// petType {String, required, trim}
// image {String}
// age {Number}
// sex {String, required}
// bio {string, required}
// adoptable {boolean}
// posts [{ref Post}]
// friends [{ ref Pet}]
// include a virtual for friendCount see logic at the bottom of user in Deep-Thoughts
