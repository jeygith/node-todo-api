var mongoose = require('mongoose');

// User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});


module.exports = {User};
