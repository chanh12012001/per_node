const Product = require('../models/product_model')

exports.index = (req, res) => {
    Product.get((err, product) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json(product)
    })
}

exports.new = (req, res) => {
    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.stock = req.body.stock
    
    product.save(err => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            message: 'Register save',
            data: product
        })
    }) 
}

exports.view = (req, res) => {
    Product.findById(req.params.id , (err, product) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            data: product
        })
    }) 
}

exports.update = (req, res) => {
    Product.findById(req.params.id , (err, product) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }

        product.name = req.body.name
    product.price = req.body.price
    product.stock = req.body.
    
    product.save(err => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            message: 'update succcess',
            data: product
        })
    }) 
    }) 
}

exports.delete = (req, res) => {
    Product.remove({_id: req.params.id} , (err, product) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            message: 'Delete success'
        })
    }) 
}
