const express = require('express');
const controller = express.Router();
const ProductSchema = require('../schemas/productSchema');

// POST / Create product              
controller.route('/').post(async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body
    if (!name || !price)
        res.status(400).json({ text: 'Creating a product requires a name and a price' })

    const item_exists = await ProductSchema.findOne({ name })
    if (item_exists)
        res.status(409).json({ text: 'A product with that name already exists' })
    else {
        const product = await ProductSchema.create({
            name,
            description,
            price,
            category,
            tag,
            imageName,
            rating
        })
        if (!!product)
            res.status(201).json({ text: `A product with article number ${product._id} has been created` })
        else
            res.status(400).json({ text: 'Something went wrong' })
    }

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
    const tagList = await ProductSchema.find({ tag: req.params.tag })
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

controller.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const tagList = await ProductSchema.find({ tag: req.params.tag }).limit(req.params.take)
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

// GET / Get a single product
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

// PUT / Update a product                 
controller.route('/:articleNumber').put(async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body
    if (!name || !price)
        res.status(400).json({ text: 'Creating a product requires a name and a price' })
    if (!req.params.articleNumber)
        res.status(400).json('An article number is required')
    else {
        const currentProduct = await ProductSchema.findByIdAndUpdate(req.params.articleNumber, req.body)
        if (currentProduct) {
            res.status(200).json({ text: `The product with article number ${req.params.articleNumber} has been updated` })
        }
        else {
            res.status(404).json({ text: `No product with article number ${req.params.articleNumber} was found` })
        }
    }
})

// DELETE / Delete a product                  
controller.route('/:articleNumber').delete(async (req, res) => {
    if (!req.params.articleNumber)
        res.status(400).json('An article number is required')
    else {
        const item = await ProductSchema.findById(req.params.articleNumber)
        if (item) {
            await ProductSchema.remove(item)
            res.status(200).json({ text: `The product with article number ${req.params.articleNumber} was successfully deleted` })
        }
        else {
            res.status(404).json({ text: `No product with article number ${req.params.articleNumber} was found` })
        }
    }
})

module.exports = controller