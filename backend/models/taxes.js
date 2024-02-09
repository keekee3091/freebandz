const mongoose = require('mongoose')

const taxesSchema = mongoose.Schema({
    taxesUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    taxesYear: { type: Number, required: true },
    taxesRate: { type: Number, required: true },
    taxesDeduction: [{
        deductionName: { type: String, required: true },
        deductionAmount: { type: Number, required: true }
    }]
})

const Tax = mongoose.model('taxes', taxesSchema);

module.exports = Tax