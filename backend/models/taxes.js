const mongoose = require('mongoose')

const taxesSchema = mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'clients', required: true },
    invoiceNumber: { type: String, required: true },
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date },
    items: [{
        description: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        unitPrice: { type: Number, required: true },
        total: { type: Number, required: true }
    }],
    subtotal: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    total: { type: Number, required: true },
    status: { type: String, enum: ['draft', 'sent', 'paid', 'overdue'], default: 'draft' },
    notes: { type: String }
});

const Tax = mongoose.model('taxes', taxesSchema);

module.exports = Tax