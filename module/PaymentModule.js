const dateFormat = require("dateformat");
const { db_Select } = require("./MasterModule");


const getTypeList = (id = 0) => {
    return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var select = "id,pay_name,created_dt",
      table_name = "md_subscription",
      whr = id > 0 ? `id=${id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const getDetailsList = (id = 0) => {
  return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
 var select = "a.id,a.sub_id,a.subscription_dtls,a.created_dt",
 table_name = "md_subscription_dtls a,md_subscription b",
 whr = id > 0 ? `a.sub_id = b.id AND a.sub_id=${id}` : 'a.sub_id = b.id',
 order = null;
 var res_dt = await db_Select(select, table_name, whr, order);
 resolve(res_dt);
  });
};

module.exports = {getTypeList, getDetailsList}