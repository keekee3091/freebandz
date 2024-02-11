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


module.exports = router;