var config = {};

config.mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sistlasDB';

module.exports = config;