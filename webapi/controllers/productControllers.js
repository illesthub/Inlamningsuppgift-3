const express = require('express');
const controller = express.Router();
let products = require('../data/simulated_database');

//Middleware
controller.param('id', (req, res, next, id) => {
    req.product = products.find(product => product.id == id)
    next()
})


// POST / Create product
controller.post('/', (req, res) => {
    let product = {
        id: (products[products.length -1])?.id > 0 ? (products[products.length -1])?.id +1 : 1,
        articleNumber: req.body.articleNumber,
        name: req.body.name,
        price: req.body.price
    }

    products.push(product)
    res.status(201).json(product)
})

// GET / Get all products
controller.get('/', (req, res) => {
    res.status(200).json(products)
})

//GET / Get a single product
controller.get('/:id', (req, res) => {
    if (req.product != undefined)
    res.status(200).json(req.product)
    else res.status(404).json()
})

//PUT / Update product
controller.put('/:id', (req, res) => {
    if (req.product != undefined) {
        products.forEach (product => {
            if (product.id == req.product.id) {
                product.name = req.body.name;
                product.articleNumber = req.body.articleNumber;
                product.price = req.body.price;
            }
        })
        res.status(200).json(req.product)
    }
    else res.status(404).json()
})

//DELETE / Delete product
controller.delete('/:id', (req, res) => {
    if (req.product != undefined) {
        products = products.filter(product => product.id !== req.product.id)
        res.status(204).json()
    }
    else res.status(404).json()
})

module.exports = controller