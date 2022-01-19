const products = require('./products/products.json')
const products_detail = require('./products/products-detail.json')

const express = require('express')
const app = express()
app.use(express.static(__dirname + '/static'))

app.get('/products/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(products)
})

app.get('/products/:id/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(products_detail[req.params.id])
})

app.listen(8000)
