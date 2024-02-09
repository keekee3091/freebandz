const mongoose = require('mongoose')

const incomesSchema = mongoose.Schema({
    incomeUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    incomeAmount: { type: Number, required: true },
    incomeSource: { type: String, required: true },
    incomeDate: { type: Date, default: Date.now },
    incomeDescription: { type: String, required: true },
})

const Income = mongoose.model('incomes', incomesSchema);

module.exports = Income