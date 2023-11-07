const express = require('express');
const { getDetailsList } = require('../module/PaymentModule');
const { saveDtls } = require('../module/Add_dtlsModule');
add_dtlsRouter = express.Router();

add_dtlsRouter.get("/add_dtls", async (req, res) => {
    var res_dt = await getDetailsList();
    var data = {
        res_dt,
        header: "Detail List",
    }
res.render("payment/add_dtls", data)
});

add_dtlsRouter.post("/save_dtls", async (req, res) => {
    var drop_data = req.body.selectedOption;
    var text_data = req.body.dtls;
    console.log(drop_data,text_data);
    var res_dt = await saveDtls(drop_data,text_data)
    res.redirect("/payment/subscription_dtls")
})


module.exports = { add_dtlsRouter }