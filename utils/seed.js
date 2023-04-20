const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

// Connect to MongoDB database using Mongoose and the MongoDB URI stored in the .env file using the dotenv package. 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Seed the database with the user and thought data from the data folder.
const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    const createdUsers = await User.create(userData);

    for (let i = 0; i < thoughtData.length; i++) {
      const { _id } = createdUsers[i % createdUsers.length];
      thoughtData[i].userId = _id;
      await Thought.create(thoughtData[i]);
    }

    // Log success message to the console and exit the process.
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
