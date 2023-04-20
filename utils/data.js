const userData = [
    {

    username: 'johndoe',
    email: 'johndoe@email.com',
    password: 'password12345',
    thoughts: [],
    friends: []
},

{
    username: 'janedoe',
    email: 'janedoe@email.com',
    password: 'password12345',
    thoughts: [],
    friends: []

},

{
    username: 'jamesdoe',
    email: 'jamesdoe',
    password: 'password12345',
    thoughts: [],
    friends: []
}

];

const thoughtData = [
    {
        thoughtText: 'This is a test thought',
        username : 'johndoe',
        reactions : []
    },
    {
        thoughtText: 'Wow, this is a second test thought',
        username: 'janedoe',
        reactions: []
    },
    {
        thoughtText: 'I can\'t believe this is a third test thought',
        username: 'jamesdoe',
        reactions: []
    }
];

module.exports = { userData, thoughtData };
