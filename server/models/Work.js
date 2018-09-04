const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  uri: String
});

module.exports = mongoose.model('Work', WorkSchema);
