const mongoose = require('mongoose');

function connect() {
  // mongoose.set('userNewUrlParser', true);
  // mongoose.set('useUnifiedTopology', true);

  mongoose.connect(
    'mongodb://localhost:27017/projeto-crud?readPreference=primary&ssl=false',
  );

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Connected to database');
  });

  db.on('error', console.error.bind(console, 'connection error: '));
}

module.exports = {
  connect,
};
