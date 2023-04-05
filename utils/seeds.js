const connection = require('../config/connection');
const {Thought, User} = require('../models')
const {userSeeds, thoughtSeeds} = require('./data')

connection.once('open', async => {
    Thought.deleteMany({});
    User.deleteMany({});
    await.User.collection.insertMany(userSeeds)
})