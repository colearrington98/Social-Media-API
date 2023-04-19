const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    thoughts : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;

