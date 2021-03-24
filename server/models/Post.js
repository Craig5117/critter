const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
// need to add date formatting feel free to use your own or copy one that we have already used
const dateFormat = require('../utils/dateFormat');
const { create } = require('./Comment');

// postSchema
const postSchema = new Schema(
    {
        postText: {
            type: DataTypes.STRING(10000),
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        petUsername: {
            type: DataTypes.STRING,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
)

commentSchema.virtual('commentCount').get(function() {
    return this.comments.length;
  });

const post = ('Post', postSchema);
module.exports = post;

// postText {String, required, minlength 1, maxlength 10000}
// createdAt {Date, default, get}
// petUsername {String, required}
// comments [commentSchema]
// getters true

// virtual commentCount