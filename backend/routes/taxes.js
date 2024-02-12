var express = require('express');
var router = express.Router();

const Tax = require('../models/taxes')

//Tax record creation
router.post('/', async (req, res) => {
  try {
    const {
      client,
      invoiceNumber,
      issueDate,
      dueDate,
      items,
      subtotal,
      tax,
      total,
      status,
      notes
    } = req.body

    const newTax = new Tax({
      client,
      invoiceNumber,
      issueDate,
      dueDate,
      items,
      subtotal,
      tax,
      total,
      status,
      notes
    });
    const savedTax = await newTax.save();

    res.status(201).json(savedTax)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get all tax record
router.get('/', async (req, res) => {
  try {
    const taxes = await Tax.find()
    res.json(taxes)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
})

//Get tax record by ID
router.get('/:id', async (req, res) => {
  try {
    const taxes = await Tax.findOne(req.params.id)
    if (!taxes) {
      return res.status(404).json({ message: 'Tax record not found' })
    }
    res.json(taxes)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
})

//Update tax record by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedTaxes = await Tax.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedTaxes)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
})

//Delete tax record by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTax = await Tax.findByIdAndDelete(req.params.id)
    res.json(deletedTax)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
})


module.exports = router;
