const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
// need to add date formatting feel free to use your own or copy one that we have already used
const dateFormat = require('../utils/dateFormat');



// postSchema
const tailSchema = new Schema(
    {
        tailText: {
            type: String,
            required: 'You need add text to your Tail',
            minlength: 1,
            maxlength: 10000,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        postedBy: {
            type: Schema.Types.ObjectId, ref: "Pet",
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
    }
)

tailSchema.virtual('commentCount').get(function() {
    return this.comments.length;
  });

const Tail = model('Tail', tailSchema);
module.exports = Tail;