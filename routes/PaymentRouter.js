const { getTypeList } = require('../module/PaymentModule');
const express = require('express');
paymentRouter = express.Router();

paymentRouter.get("/subscription_type", async(req, res) => {
  var type_data = await getTypeList();
  console.log('gfdgf', type_data);
  var data = {
    type_data,
    header: "Type List",
  };
  res.render("payment/subscription_type",data)
    // res.render("payment/subscription_type");
});

paymentRouter.get("/view_type", async (req, res) => {
  var type_data = await getTypeList();
  console.log('gfdgf', type_data);
  var data = {
    type_data,
    header: "Type List",
  };
  res.render("payment/subscription_type",data)
});



module.exports = {paymentRouter};