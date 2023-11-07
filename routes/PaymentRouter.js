const { getTypeList, getDetailsList } = require('../module/PaymentModule');
const express = require('express');
paymentRouter = express.Router();

paymentRouter.get("/subscription_type", async(req, res) => {
  var type_data = await getTypeList();
  // console.log('gfdgf', type_data);
  var data = {
    type_data,
    header: "Type List",
  };
  res.render("payment/subscription_type",data)
    // res.render("payment/subscription_type");
});

paymentRouter.get("/view_type", async (req, res) => {
  var type_data = await getTypeList();
  // console.log('gfdgf', type_data);
  var data = {
    type_data,
    header: "Type List",
  };
  res.render("payment/subscription_type",data)
});

paymentRouter.get("/subscription_dtls", async(req, res) => {
  var dtls_data = await getDetailsList();
  var data = {
    dtls_data,
    header: "Details List",
  }
  res.render("payment/subscription_dtls", data)
});

paymentRouter.get("/subscription_amount", async(req, res) => {
  res.render("payment/subscription_amount")
});


module.exports = {paymentRouter};