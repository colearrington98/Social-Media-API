const mongoose = require('mongoose');
const { User, Thought } = require('./models');
const { userData, thoughtData } = require('./data');

// Connect to MongoDB database using Mongoose and the MongoDB URI stored in the .env file using the dotenv package.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Seed the database with the user and thought data from the data folder.
const seedDatabase = async () => {
  try {
    // Clear out the database before seeding it with new data.
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users and thoughts in the database.
    const createdUsers = await User.create(userData);
    const createdThoughts = await Thought.create(thoughtData);

    // Associate each thought with a user.
    for (let i = 0; i < createdThoughts.length; i++) {
      const thought = createdThoughts[i];
      const userId = createdUsers[Math.floor(Math.random() * createdUsers.length)]._id;
      thought.userId = userId;
      await thought.save();
    }

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();


  



  