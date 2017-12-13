const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    locations: { type: Array }
});

//defines what we want to be returned
userSchema.methods.serialize = function() {
      return {
        id: this._id,
        username: this.username,
        password:this.password
      };
    }

const Users = mongoose.model('Users', userSchema);

module.exports = { Users };