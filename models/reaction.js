const {Schema, model } = require('mongoose'); // Import mongoose

const reactionSchema = new Schema({ // Create a new schema
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
}, {
    toJSON: {
        getters: true
    }
});

const Reaction = model('reaction', reactionSchema); // Create a Reaction model using the ReactionSchema

module.exports = Reaction;
