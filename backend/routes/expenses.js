var express = require('express');
var router = express.Router();

const Expense = require('../models/expenses')

router.post('/', async (req, res) => {
    try {
        const { expenseAmount, expenseCategory, expenseDate, expenseDescription } = req.body

        const newExpense = new Expense({
            expenseAmount,
            expenseCategory,
            expenseDate,
            expenseDescription
        })
        const savedExpense = await newExpense.save()

        res.json(savedExpense)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find()
        res.json(expenses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const expenses = await Expense.findById(req.params.id)
        if (!expenses) {
            res.status(404).json({ message: 'No expense record found' })
        }
        res.json(expenses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, {
            expenseAmount,
            expenseCategory,
            expenseDate,
            expenseDescription
        }, { new: true })
        if (!expense) {
            res.status(404).json({ message: 'Ah fu' })
        }
        res.json(expense)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id)
        if (!deletedExpense) {
            res.status(404).json({ message: 'ah super fuh' })
        }
        res.json(deletedExpense)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;