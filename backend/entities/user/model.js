/**
 * user model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  avatarUrl: String,
  email: String,
  role: { type: String, default: 'user' }, // ['admin', 'moderator', 'user']
  provider : String,
  profile: {
    id: Number,
    url: String,
    location: String,
    bio: String,
    followers: Number,
    following: Number,
  },
});

module.exports = mongoose.model('user', userSchema);
