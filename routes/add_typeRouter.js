const { saveType } = require('../module/Add_typeModule')

const express = require('express');
add_typeRouter = express.Router();
dateFormat = require("dateformat");


add_typeRouter.get("/add_type", async(req, res) => {
    res.render("payment/add_type");
});

add_typeRouter.post("/save_type", async(req, res) =>{
    var data = req.body;
    var res_dt = await saveType(data);
    // res.send(res_dt);
    res.redirect("/payment/subscription_type");
})

module.exports = {add_typeRouter}