const mongoose = require('mongoose')

const expensesSchema = mongoose.Schema({
    expenseUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    expenseAmount: { type: Number, required: true },
    expenseCategory: { type: String, required: true },
    expenseDate: { type: Date, default: Date.now },
    expenseDescription: { type: String }
});

const Expense = mongoose.model('expenses', expensesSchema);

modules.exports = Expense