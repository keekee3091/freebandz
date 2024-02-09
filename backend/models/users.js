const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    freelancer_details: {
        name: { type: String },
        contact: { type: String },
        tax_info: { type: String }
    }
});


const User = mongoose.model('users', usersSchema);

module.exports = User