
const dateFormat = require("dateformat");
const { db_Insert } = require("./MasterModule");

const saveType = (data) => {
    return new Promise(async (resolve, reject) => {
  datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        var table_name = 'md_subscription',
        fields = data.id > 0 ? `pay_name = '${data.type_add}', modified_by = 'admin', modified_dt = '${datetime}'`:
        `(pay_name, created_by, created_dt)`,
        values = `('${data.type_add}', 'admin', '${datetime}')`,
        whr = data.id > 0 ? `id = ${data.id}` : null,
        flag = data.id > 0 ? 1 : 0;
    var type_data = await db_Insert(table_name, fields, values, whr, flag)
    resolve(type_data);
    });
};

module.exports = {saveType}