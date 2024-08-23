// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
// });

// module.exports = mongoose.model('User', userSchema);
// models/User.js



// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
// });

// module.exports = mongoose.model('User', userSchema);


// above is correct code 

// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Editor', 'Viewer'], required: true }
});

module.exports = mongoose.model('User', userSchema);