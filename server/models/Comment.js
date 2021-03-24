const { Schema, model, Model } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

// date formatting required here too
const CommentSchema = new Schema(
    {
        writtenBy: {
          type: String
        },
        commentBody: {
          type: String
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        },
        // use ReplySchema to validate data for a reply
        replies: [ReplySchema]
      },
      {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
)

// commentText {String, required, maxlength 3000}
// petUsername {String, required}
// createdAt {Date, default, get}
// getters true
const Comment = model('Comment', CommentSchema);
module.exports = Comment;