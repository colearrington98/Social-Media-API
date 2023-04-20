const { Schema, Model, } = require('mongoose'); // Import mongoose

const thoughtSchema = new Schema({ // Create a new schema
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() { // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema); // Create a Thought model using the ThoughtSchema

module.exports = Thought;

