const express = require('express');
add_amountRouter = express.Router();

add_amountRouter.get("/add_amount", async (req, res) => {
    res.render("payment/add_amount_tennure")
})

module.exports = {add_amountRouter}