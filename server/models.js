const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    locations: { type: Array }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };