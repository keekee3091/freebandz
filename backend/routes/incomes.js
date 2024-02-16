var express = require('express');
var router = express.Router();

const Income = require('../models/taxes')

//Income record creation
router.post('/', async (req, res) => {
    try {
        const { incomeAmount, incomeSource, incomeDate, incomeDescription } = req.body

        const newIncome = new Income({
            incomeAmount,
            incomeSource,
            incomeDate,
            incomeDescription
        })
        const savedIncome = await newIncome.save()

        res.json(201).json(savedIncome)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Get all income records 
router.get('/', async (req, res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get a single record with ID
router.get('/:id', async (req, res) => {
    try {
        const singleIncome = await Income.findById(req.params.id)
        if (!singleIncome) {
            return res.status(404).json({ message: 'Record not found' })
        }
        res.json(singleIncome)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update a record using ID
router.patch('/:id', async (req, res) => {
    try {
        const updatedIncome = await Income.findByIdAndUpdate(req.params.id, {
            incomeAmount,
            incomeSource,
            incomeDate,
            incomeDescription
        }, { new: true });
        if (!updatedIncome) {
            res.status(404).json({ message: 'Record not found' })
        }
        res.json(updatedIncome)
    } catch (error) {
        res.json(500).json({ message: error.message })
    }
})

// Delete a record using ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedIncome = await Income.findByIdAndDelete(req.params.id)
        if (!deletedIncome) {
            res.status(404).json({ message: 'Record not found' })
        }
        res.json(deletedIncome)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;