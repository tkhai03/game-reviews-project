const reviewData = require('../data.json')
let id = 6
module.exports = {
  getAllReviews: (req, res) => {
    res.status(200).send(reviewData)
  },

  addReviews: (req, res) => {
    console.log(req.body)
    req.body.id = id
    id++
    reviewData.push(req.body)
    res.status(200).send(reviewData)
  },

  deleteReviews: (req, res) => {
    const deleteId = req.params.id
    const index = reviewData.findIndex((element) => element.id === +deleteId)
    reviewData.splice(index, 1)
    res.status(200).send(reviewData)
  }
}

