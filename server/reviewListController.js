const reviewData = require('../data.json')

module.exports = {
  getAllReviews: (req, res) => {
    console.log(reviewData)
    res.status(200).send(reviewData)
  },
}