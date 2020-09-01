const reviewCtrl = require('./reviewListController')
const express = require('express')
const app = express()


const SERVER_PORT = 3500

app.use(express.json())

app.get('/api/reviews', reviewCtrl.getAllReviews)

app.post('/api/reviews', reviewCtrl.addReviews)

app.delete('/api/reviews/:id' , reviewCtrl.deleteReviews)

//* Cart endpoints
// app.get('/api/cart', cartCtrl.getCart)
// app.post('/api/cart', cartCtrl.addToCart)
// app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
// app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
// app.delete('/api/cart', cartCtrl.checkout)

app.listen(SERVER_PORT, () =>
  console.log(`Please open on port ${SERVER_PORT}`)
)
