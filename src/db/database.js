const mongoose = require('mongoose');
mongoose.Promise = Promise;

const user = '';
const pass = '';
const host = '127.0.0.1';
const port = '27017';
const dbName = 'koa-basic-rest';
const uri = `mongodb://${host}:${port}`;
const options = { user, pass, dbName, family: 4, useNewUrlParser: true };

module.exports = async () => {
  mongoose.connection.on('error', err => {
    console.error('MongoDB Connection ERROR:');
    console.error(err);
  });

  mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
  });

  return await mongoose.connect(uri, options);
};
