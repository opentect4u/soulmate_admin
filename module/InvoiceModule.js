const { db_Select } = require("./MasterModule");

const invoice_description = () => {
  return new Promise (async (resolve, reject) => {
    var select = "*",
    table_name = 'td_payment_request',
    whr = null,
    order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

// const amount = () => {
//     return new Promise (async (req, res) => {
//         var select = null,
//         table_name = '',
//         whr = null,
//         order = null;
//         var res_dt = await db_Select(select, table_name, whr, order);
//         resolve(res_dt);
//     });
// }

module.exports = { invoice_description };