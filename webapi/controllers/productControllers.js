const express = require('express');
const controller = express.Router();
const ProductSchema = require('../schemas/productSchema');

// Middleware
controller.param('id', (req, res, next, id) => {
    req.product = products.find(product => product.id == id)
    next()
})

controller.param('tag', (req, res, next, tag) => {
    req.products = products.filter(p => p.tag == tag)
    next()
})

controller.param('articleNumber', (req, res) => {
    req.product = products.find(p => p.articleNumber == articleNumber)
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
controller.route('/').get(async (req, res) => {
    const products = []
    const tagList = await ProductSchema.find()
    if (tagList) {
        for (let product of tagList) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    }
    else 
        res.status(400).json()
})

// GET / Get products of a certain tag
controller.route('/:tag').get(async (req, res) => {
    const products = []
    const tagList = await ProductSchema.find({tag: req.params.tag})
    if (tagList) {
        for (let product of tagList) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    }
    else 
        res.status(400).json()
})

controller.route('/:tag/:take').get(async (req, res) =>{
    const products = []
    const tagList = await ProductSchema.find({tag: req.params.tag}).limit(req.params.take)
    if (tagList) {
        for (let product of tagList) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    }
    else 
        res.status(400).json()
})

// GET / Get a single product using article number
controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await ProductSchema.findById(req.params.articleNumber)
    if (product) {
        res.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tag: product.tag,
            imageName: product.imageName,
            rating: product.rating
        })
    }
    else
        res.status(404).json()
})

// GET / Get a single product using ID          
controller.get('/:id', (req, res) => {
    if (req.product != undefined)
    res.status(200).json(req.product)
    else res.status(404).json()
})

// PUT / Update product using ID                     
controller.put('/:id', (req, res) => {
    if (req.product != undefined) {
        products.forEach (product => {
            if (product.id == req.product.id) {
                product.articleNumber = req.body.articleNumber;
                product.name = req.body.name;
                product.price = req.body.price;
            }
        })
        res.status(200).json(req.product)
    }
    else res.status(404).json()
})

// DELETE / Delete product using ID                   
controller.delete('/:id', (req, res) => {
    if (req.product != undefined) {
        products = products.filter(product => product.id !== req.product.id)
        res.status(204).json()
    }
    else res.status(404).json()
})

module.exports = controller