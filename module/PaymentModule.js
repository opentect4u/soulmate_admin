const dateFormat = require("dateformat");
const { db_Select } = require("./MasterModule");


const getTypeList = () => {
    return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var select = "id,pay_name,created_dt",
      table_name = "md_subscription",
      whr = null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

module.exports = {getTypeList}