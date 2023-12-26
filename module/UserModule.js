const { db_Select, db_Insert } = require("./MasterModule");

const getUserList = (flag = "A") => {
  return new Promise(async (resolve, reject) => {
    var select =
        "id,profile_id,u_name,phone_no,email_id,file_path,pay_flag,active_flag,plan_id,created_dt",
      table_name = "td_user_profile",
      whr = flag != "A" ? `pay_flag='${flag}'` : null,
      order = null;
    var res_dt = db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const getList = (id) => {
  return new Promise(async (resolve, reject) => {
    var select = "id,profile_id,u_name,phone_no,email_id,created_dt",
      table_name = "td_user_profile",
      whr = id > 0 ? `id=${id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const getActive = (data) => {
  return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var table_name = "td_user_profile",
      fields = `active_flag = "${data.flag}", view_flag = "${data.flag}", modified_by = 'admin', modified_dt = "${datetime}"`,
      values = null,
      whr = `id= ${data.id}`,
      flag = 1;
    var res_dt = db_Insert(table_name, fields, values, whr, flag);
    resolve(res_dt);
  });
};

// const getEditData = (data) =>{
//   return new Promise(async (resolve, reject) => {
//     datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
//     var table_name = "td_check_update a, td_user_profile b",
//     fields = `check_flag = "${data.flag}", view_flag = "Y", checked_by = 'admin', check_dt = "${datetime}"`,
//     values = null,
//     whr = `a.profile_id = b.id AND a.check_flag = 'U'`,
//     flag = 1;
//     var res_dt = await db_Insert(table_name,fields,values,whr,flag);
//     resolve(res_dt);
//   });
// };

const EditData = (data) =>{
  return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var table_name = "td_check_update",
    fields = `check_flag = "${data.flag}", checked_by = 'admin', check_dt = "${datetime}"`,
    values = null,
    whr = `profile_id = ${data.id} AND check_flag = 'U'`,
    flag = 1;
    var res_dt = await db_Insert(table_name,fields,values,whr,flag);

    var table_name = "td_user_profile",
    fields = `view_flag = "Y"`,
    values = null,
    whr = `id = ${data.id}`,
    flag = 1;
    var res_dt = await db_Insert(table_name,fields,values,whr,flag);
    resolve(res_dt);
  });
};

const getAllEditData = (id) => {
  return new Promise(async (resolve, reject) => {
    var select = "a.profile_id user_id, a.edite_flag, a.check_flag, b.profile_id,b.u_name,b.email_id, b.view_flag",
    table_name = `td_check_update a,td_user_profile b`,
    whr = `a.profile_id = b.id AND a.check_flag = 'U' AND b.id = ${id}`,
    order = `order by a.modified_dt`;
   var res_dt = await db_Select(select, table_name, whr, order);
   resolve(res_dt);
  });
};

const getDeletedata = (data) => {
  return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var select =
        "id,profile_id,u_name,phone_no,email_id,country_id,state_id,city_id,location_id,latt_long,dob,ac_for,mother_tong,about_us,religion,gender,caste_id,oth_comm_marry_flag,phone_approved_flag,email_approved_flag,pay_flag,plan_id,plan_act_dt,plan_exp_dt,kundali_file_name,rasi_id,nakhatra_id,jotok_rasi_id,file_path,profile_verify_flag,kyc_type,active_flag,disclaimer,policy,created_by,created_dt,modified_by,modified_dt",
      table_name = "td_user_profile",
      whr = `id = ${data.id}`,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    // console.log(res_dt);
    if (res_dt.suc > 0) {
      var table_name = "td_user_profile_del",
        fields = `(id,profile_id,u_name,phone_no,email_id,country_id,state_id,city_id,location_id,latt_long,dob,ac_for,mother_tong,about_us,religion,gender,caste_id,oth_comm_marry_flag,phone_approved_flag,email_approved_flag,pay_flag,plan_id,plan_act_dt,plan_exp_dt,kundali_file_name,rasi_id,nakhatra_id,jotok_rasi_id,file_path,profile_verify_flag,kyc_type,active_flag,disclaimer,policy,created_by,created_dt,modified_by,modified_dt,delete_reason,remarks,deleted_by,deleted_dt)`,
        values = `('${res_dt.msg[0].id}','${res_dt.msg[0].profile_id}', '${res_dt.msg[0].u_name}','${res_dt.msg[0].phone_no}','${res_dt.msg[0].email_id}', '${res_dt.msg[0].country_id}','${res_dt.msg[0].state_id}','${res_dt.msg[0].city_id}','${res_dt.msg[0].location_id}','${res_dt.msg[0].latt_long}','${res_dt.msg[0].dob}','${res_dt.msg[0].ac_for}', '${res_dt.msg[0].mother_tong}','${res_dt.msg[0].about_us}', '${res_dt.msg[0].religion}', '${res_dt.msg[0].gender}', '${res_dt.msg[0].caste_id}', '${res_dt.msg[0].oth_comm_marry_flag}', '${res_dt.msg[0].phone_approved_flag}', '${res_dt.msg[0].email_approved_flag}', '${res_dt.msg[0].pay_flag}', '${res_dt.msg[0].plan_id}', '${res_dt.msg[0].plan_act_dt}', '${res_dt.msg[0].plan_exp_dt}', '${res_dt.msg[0].kundali_file_name}', '${res_dt.msg[0].rasi_id}', '${res_dt.msg[0].nakhatra_id}', '${res_dt.msg[0].jotok_rasi_id}',
        '${res_dt.msg[0].file_path}', '${res_dt.msg[0].profile_verify_flag}', '${res_dt.msg[0].kyc_type}', '${res_dt.msg[0].active_flag}', '${res_dt.msg[0].disclaimer}', '${res_dt.msg[0].policy}', '${res_dt.msg[0].u_name}', '${datetime}', '${res_dt.msg[0].modified_by}', '${datetime}', '${data.resn_id}', '${data.remarks}', 'admin', '${datetime}')`,
        whr = null,
        flag = 0;
      var del_dt = await db_Insert(table_name, fields, values, whr, flag);
      // console.log(del_dt);
      resolve(del_dt);
    }
  });
};

// const getActive = (data) => {
//   return new Promise(async (resolve, reject) => {
//   datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
//   var select = "id,profile_id,u_name,phone_no,email_id,created_dt",
//   table_name = "td_user_profile",
//   whr = data.id > 0 ? `id=${data.id}` : null,
//   order = null;
//   var res_dt= await db_Select(select,table_name,whr,order);
//   if(res_dt.suc > 0){
//     if(res_dt.msg.length > 0){
//       var table_name = 'td_user_profile',
//       fields = `active_flag = '${data.flag}', modified_by = 'admin', modified_dt = "${datetime}"`,
//       values = null,
//       whr = `id= ${data.id}`
//       flag = 1;
//       var active_dt = db_Insert(table_name, fields, values, whr, flag);
//      resolve(active_dt);
//     }
//   }
//   })
// };

const user_groom_loc = (data) => {
  return new Promise(async (resolve, reject) => {
    var select =
        "a.*, b.edu_name education_name, c.occu_name, d.income income_name, e.name work_location_name",
      table_name =
        "td_user_education a LEFT JOIN md_education b ON a.heigh_education=b.id LEFT JOIN  md_occupation c ON a.occup=c.id  LEFT JOIN md_income d ON a.income=d.id LEFT JOIN md_cities e ON a.work_location=e.id",
      whr = data.user_id > 0 ? `a.user_id=${data.user_id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const user_basic_info = (data, dashboard_flag = false) => {
  return new Promise(async (resolve, reject) => {
    var select =
        "a.id user_id, b.id id, b.profile_id, b.dob, b.email_id, b.phone_no, a.marital_status,a.height,a.weight,a.family_status,a.family_values,a.family_type,a.disability_flag,a.body_type,a.drinking_habbits,a.age,b.gender, a.age,a.eating_habbits,a.smoking_habbits,a.no_sister,a.no_brother,a.father_occupation,a.mother_occupation,a.family_location,a.about_my_family,b.about_us,b.u_name,b.ac_for,b.mother_tong mother_tong_id, d.lang_name mother_tong, b.about_us, c.caste_name, b.caste_id, b.religion, b.oth_comm_marry_flag, b.jotok_rasi_id, b.kundali_file_name, b.phone_approved_flag, b.email_approved_flag, e.beng_rashi, b.file_path, b.rasi_id, f.name city_name, b.city_id city_id, b.country_id, g.name country_name, b.state_id, h.name state_name,b.location_id, b.profile_verify_flag, b.active_flag",
      table_name =
        "td_user_p_dtls a LEFT JOIN td_user_profile b ON a.user_id=b.id LEFT JOIN md_caste_list c ON b.caste_id=c.id LEFT JOIN md_language d ON b.mother_tong=d.id LEFT JOIN md_rashi_pos e ON b.rasi_id = e.position LEFT JOIN md_cities f ON b.city_id=f.id LEFT JOIN md_countries g ON b.country_id=g.id LEFT JOIN md_states h ON b.state_id=h.id",
      whr = data.user_id > 0 ? `a.user_id=${data.user_id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    if (data.user_id > 0 && dashboard_flag) {
      var select = "IF(COUNT(id) > 0, 'Y', 'N') kyc_data",
        table_name = "td_user_kyc_list",
        whr = `user_id = ${data.user_id}`,
        order = null;
      var kyc_chk = await db_Select(select, table_name, whr, order);
      res_dt.suc > 0 && res_dt.msg.length > 0
        ? (res_dt.msg[0]["kyc_flag"] =
            kyc_chk.suc > 0 && kyc_chk.msg.length > 0
              ? kyc_chk.msg[0].kyc_data
              : "N")
        : "";
    }
    // console.log(res_dt);
    resolve(res_dt);
  });
};

const get_hobby = (data) => {
  return new Promise(async (resolve, reject) => {
    var select = "id,user_id,hobbies_interest,sports,fav_music,movie",
      table_name = "td_user_hobbies",
      whr = data.user_id > 0 ? `user_id=${data.user_id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const user_hobbies = (data) => {
  return new Promise(async (resolve, reject) => {
    var hobbie_data = {},
      res_dt;
    var hobbies_tb_data = [
      {
        field_name: "a.id, a.hobbies_interest, b.hobby",
        table_name: "td_user_hobbies_int a, md_hobby b",
        whr: `AND a.hobbies_interest=b.id`,
        input_field: "field_Hobbies_Interests",
      },
      {
        field_name: "a.id, a.music_name, b.music",
        table_name: "td_user_hobbies_music a, md_music b",
        whr: `AND a.music_name=b.id`,
        input_field: "field_Music",
      },
      {
        field_name: "a.id, a.sports_name, b.sports",
        table_name: "td_user_hobbies_sports a, md_sports b",
        whr: `AND a.sports_name=b.id`,
        input_field: "field_Sports",
      },
      {
        field_name: "a.id, a.movie_name, b.movie",
        table_name: "td_user_hobbies_movies a, md_movie b",
        whr: `AND a.movie_name=b.id`,
        input_field: "field_Preferred_Movies",
      },
      {
        field_name: "a.id, a.lang_name lang_id, b.lang_name",
        table_name: "td_user_hobbies_lang a, md_language b",
        whr: `AND a.lang_name=b.id`,
        input_field: "field_Spoken_Languages",
      },
    ];

    for (let dt of hobbies_tb_data) {
      var select = `${dt.field_name}`,
        table_name = `${dt.table_name}`,
        whr = data.user_id > 0 ? `user_id=${data.user_id} ${dt.whr}` : null,
        order = null;
      res_dt = await db_Select(select, table_name, whr, order);
      res_dt.suc > 0 ? (hobbie_data[dt.input_field] = res_dt.msg) : "";
    }
    res_dt = { suc: 1, msg: hobbie_data };
    // console.log(res_dt);
    resolve(res_dt);
  });
};

const userProfile = (data) => {
  return new Promise(async (resolve, reject) => {
    var select = "id, file_path",
      table_name = "td_user_profile",
      whr = data.user_id > 0 ? `id = ${data.user_id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const user_multiImg = (data) => {
  return new Promise(async (resolve, reject) => {
    var select = "id, file_path",
      table_name = "td_user_profile_image",
      whr = data.user_id > 0 ? `user_id = ${data.user_id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    // console.log(res_dt);
    resolve(res_dt);
  });
};

const user_Doc = (data) => {
  return new Promise(async (resolve, reject) => {
    var select = "id, doc_type",
      table_name = "md_document",
      whr = data.id > 0 ? `id = ${data.id}` : null,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const user_Doc_File = (data) => {
  return new Promise(async (resolve, reject) => {
    var select = "id,file_path",
      table_name = "td_user_kyc_list",
      whr = `user_id = ${data.user_id}`,
      order = null;
    var kyc_dt = await db_Select(select, table_name, whr, order);
    resolve(kyc_dt);
  });
};

const getProfileVerify = (data) => {
  return new Promise(async (resolve, reject) => {
    datetime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    var table_name = "td_user_profile",
      fields = `profile_verify_flag = "${data.flag}", modified_by = 'admin', modified_dt = "${datetime}"`,
      values = null,
      whr = `id =${data.id}`,
      flag = 1;
    var res_dt = db_Insert(table_name, fields, values, whr, flag);
    resolve(res_dt);
  });
};

const PaymentHistory = () => {
  return new Promise(async (resolve, reject) => {
    var select =
        "a.id, a.user_id, b.u_name, b.phone_no, b.profile_id, a.order_id, a.tnx_date, c.pay_name, a.plan_id, a.active_dt, a.expire_dt, a.amount, d.tennure_period",
      table_name =
        "td_user_payment a, td_user_profile b, md_subscription c, md_subscription_pay_dtls d",
      whr = `a.user_id=b.id AND a.plan_id=c.id AND a.plan_id=d.sub_id`,
      order = null;
    var res_dt = await db_Select(select, table_name, whr, order);
    resolve(res_dt);
  });
};

const editData = () => {
  return new Promise(async (resolve, reject) => {
    var select = "distinct a.profile_id user_id ,b.profile_id,b.u_name,b.email_id",
    table_name = `td_check_update a,td_user_profile b`,
    whr = `a.profile_id = b.id AND a.check_flag = 'U'`,
    order = `order by a.modified_dt`;
   var res_dt = await db_Select(select, table_name, whr, order);
   resolve(res_dt);
  });
};

const ConfirmEmail = (emailId,userName) => {
  return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
      host: 'email-smtp.ap-south-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
      user: 'AKIAZBYUUR636YJISSUT',
      pass: 'BKBR0FJZfKUHOyEOLBMwaa99XBybd07/v2Ik8IFRbxLU'
     },
      tls: {
      // do not fail on invalid certs
      rejectUnauthorized: true
  }
      });
      const mailOptions = {
          from: 'info@mysoulmate.co.in',
          // to: `${emailId}`,
          to: `sayantika@synergicsoftek.in`,
          subject: 'Important Email',
          html: `<!DOCTYPE html>
          <head>
          <meta charset="utf-8">
          <title>Index</title>
          
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          
              
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"> 
              
          </head>
          <style>
              body {
            font-family: 'Roboto', sans-serif;
           font-size: 14px; /* line-height: 18px;*/
            color: #344161;
            background: #f6f8f9;
            margin: 0;
            padding: 0;
            line-height: normal; 
            min-height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          html{height: 100%;}
          
          
          h1, h2, h3, h4, h5, h6, ul, ol, li, form, input, select, div, textarea {
            padding: 0;
            margin: 0
          }
          img {
            border: none;
            max-width: 100%;
            height: auto
          }
          .clear {
            margin: 0;
            padding: 0;
            clear: both
          }
          .after:after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden
          }
          a {
            color: #05adff;
            text-decoration: none;
            padding: 0;
            margin: 0;
            outline: none;
            transition: all 0.3s;
            transition: all 500ms ease-in-out
          }
          a:hover {
            color: #456ad9;
            text-decoration: none
          }
          
          button{transition: all 0.3s;
            transition: all 500ms ease-in-out}
          
          img {
            max-width: 100%
          }
          
          </style>    
          
          <body>
          <div style="max-width: 808px; width: 100%; margin:35px auto 35px auto; border-radius: 50px; box-shadow: 0 0px 12px 2px #c6c5c5;">
          <div style="border-radius: 50px 50px 0 0; background: #fff; padding: 9px 15px; text-align: center; border-bottom: #d42c3d solid 8px;">
              <img src="https://mysoulmate.co.in/assets/images/logo_new.png" alt="" style="max-width: 110px;" /></div>
              
          <div style="border-radius:0; background: #fff; padding:48px 15px; text-align: left; min-height: 450px; border-radius:0 0 50px 50px;">
              <h2 style="font-weight: 300; color: #344161; font-size: 17px; margin-bottom: 35px;">Dear ${userName},</h2>
              <p style="font-size: 17px;  margin-bottom: 35px; margin-top: 0;  line-height: 32px;">Congratulations! Your profile is live on our platform, and we're thrilled to welcome you to our community. From this moment forward, you have full access to our search list and many exclusive features designed to enhance your experience.

              We're excited to have you on board and can't wait to see your incredible journey through My Soul Mate. If you have any questions or need assistance, our support team is here to help.
              
              Thank you for choosing us to be a part of your journey. Happy exploring!</p>
                
              <p style="font-size: 17px; margin-bottom: 35px;  margin-top: 0; line-height: 32px;">Thank you,<br>
               My Soulmate Team</p>
          </div>
              
              <div style="border-radius0; background: #bd5f5f; padding: 9px 0; text-align: center;">
                  
                  <div style="border-bottom: #fff solid 1px; padding: 15px 15px">
          
                  <ul style="margin: 0; padding: 0; list-style-type: none;">
                      
                      <li style="margin: 0 0 0 0; padding: 0 10px 0 10px;  color: #fff; line-height: 16px; display: inline-block; border-right: #fff solid 1p">
                          Phone: <a href="tel:8276998997" style="color: #fff;"> 8276998997</a></li>
                      <li style="margin: 0 0 0 0; padding: 0 10px 0 10px; color: #fff; line-height: 16px; display: inline-block; border-right: #fff solid 1p">
                          Email: <a href="mailto:mysoulm297@gmail.com" style="color: #fff;">mysoulm297@gmail.com </a></li>
                      <li style="margin: 0 0 0 0; padding: 0 10px 0 10px; color: #fff; line-height: 16px; display: inline-block; border-right: #fff solid 1p">Follow Us 
                          <a href="https://www.youtube.com/shaambhaviastro?si=E42VMKrSDNPfoh1x" target="_blank" style="color: #fff;"> 
                              <img src="youtube.png" alt="" style="max-width: 19px; width: 100%; margin-bottom: -5px;" /></a></li>
                      </ul>
                </div>
                  
                <div style="padding: 15px 15px; color: #fff;">
                Note: This is an auto generated mail, please do not reply to this mail
                  </div>
              
              </div>
          </div>
              
              
          
          </body>
          </html>`
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            resolve({suc:0, msg: error})
        } else {
            console.log('Email sent:', info.response);
            resolve({suc:1, msg: 'Email sent successfully'})
        }
    });  
  })
}; 

module.exports = {
  getUserList,
  user_groom_loc,
  user_basic_info,
  user_hobbies,
  userProfile,
  user_multiImg,
  user_Doc,
  user_Doc_File,
  getActive,
  getProfileVerify,
  getList,
  PaymentHistory,
  get_hobby,
  getDeletedata,
  editData,
  EditData,
  getAllEditData,
  ConfirmEmail
};
