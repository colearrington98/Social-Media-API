const { Schema, model } = require('mongoose'); // Import mongoose


const userSchema = new Schema({ // Create a new schema
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3    
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password : {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    thought : [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

userSchema.virtual('friendCount').get(function() { // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    return this.friends.length;
});

const User = model('user', userSchema); // Create a User model using the UserSchema

module.exports = User;

