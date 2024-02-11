var express = require('express');
var router = express.Router();

const Client = require('../models/clients');

// Create a new client
router.post('/', async (req, res) => {
    try {
        const { clientUser, clientName, clientContract, clientProject } = req.body;
        const newClient = new Client({
            clientUser,
            clientName,
            clientContract,
            clientProject
        });
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a client by ID
router.get('/:id', async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a client by ID
router.patch('/:id', async (req, res) => {
    try {
        const { clientName, clientContract, clientProject } = req.body;
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, {
            clientName,
            clientContract,
            clientProject
        }, { new: true });
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a client by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.json(deletedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
