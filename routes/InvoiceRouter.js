const { invoice_description } = require('../module/InvoiceModule');

const express = require('express'),
InvoiceRouter = express.Router();
dateFormat = require("dateformat");

// InvoiceRouter.get("/invoice_download", async (req, res) => {
//     res.render("invoice/invoice");
// })

InvoiceRouter.get("/invoice_details", async (req, res) => {
    var invoice_history = await invoice_description();
    var data = {
        invoice: invoice_history.suc > 0 ? invoice_history.msg : [],
    };
res.render("user/invoice_download",data);
})

module.exports= { InvoiceRouter };