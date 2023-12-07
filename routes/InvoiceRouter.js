const { invoice_description, amount } = require('../module/InvoiceModule');

const express = require('express'),
invoiceRouter = express.Router();
dateFormat = require("dateformat");

invoiceRouter.get("/invoice_download", async (req, res) => {
    var data = req.query;
    var invoice_history = await invoice_description(data.order_id);
    res.render("invoice/invoice_details", {
        data1: invoice_history.suc > 0 ? invoice_history.msg : [],
    });
});

module.exports = {invoiceRouter}