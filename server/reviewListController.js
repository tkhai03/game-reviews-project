const reviewData = require('../data.json')

module.exports = {
  getAllReviews: (req, res) => {
    res.status(200).send(reviewData)
  },

  addReviews: (req, res) => {
    console.log(req.body)
    reviewData.push(req.body)
    res.status(200).send(reviewData)
  },

  deleteReviews: (req, res) => {
    const deleteId = req.params.id
    const index = data.findIndex((element) => element.id === deleteId)
    reviewData.splice(id, 1)
    res.status(200).send(reviewData)
  }
}

