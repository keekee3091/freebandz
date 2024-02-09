const mongoose = require('mongoose')

const clientsSchema = mongoose.Schema({
    clientUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    clientName: { type: String, required: true },
    clientContract: { type: String },
    clientProject: [{ type: String }]
})

const Client = mongoose.model('clients', clientsSchema)

module.exports = Client