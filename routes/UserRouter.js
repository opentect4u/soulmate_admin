const {
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
} = require("../module/UserModule");
const {
  field_height,
  field_weight,
  field_marital_status,
  field_Eating_Habits,
  field_Drinking_Habits,
  field_Smoking_Habits,
  field_Religion,
  field_Employed_in,
  field_family_value,
  field_family_type,
  field_family_status,
  field_Family_Location,
  field_Father_Occupation,
  field_Mother_Occupation,
  field_No_Brother,
  field_No_Sister,
  hobbies_tb_data,
  ac_for,
  field_disability,
  field_body_type,
} = require("../module/dynamicData");

const express = require("express"),
  userRouter = express.Router();
dateFormat = require("dateformat");

  userRouter.use((req, res, next) => {
    var user = req.session.user
if(!user){
  res.redirect("/login")
}
next()
  })

  userRouter.get("/dashboard", function (req, res) {
    // res.send('Welcome to Admin panel');
    res.render("dashboard/index");
  });  

userRouter.get("/user_list", async (req, res) => {
  var userList = await getUserList();
  res.render("user/user_datatable", {
    data: userList.suc > 0 ? userList.msg : [],
  });
});

userRouter.get("/view_user", async (req, res) => {
  var id = req.query.id;
  var groomLocation = await user_groom_loc({ user_id: id });
  var userBasicInfo = await user_basic_info({ user_id: id });
  var hobbies = await user_hobbies({ user_id: id });
  var profile_img = await userProfile({ user_id: id });
  var multiple_photo = await user_multiImg({ user_id: id });
  var doc_type = await user_Doc({id});
  var doc_file = await user_Doc_File({ user_id: id });
  // console.log(multiple_photo);
  var hobbyList = hobbies_tb_data;
  for (let dt of hobbyList) {
    if (hobbies.msg[dt.input_field].length > 0) {
      hobbies.msg[dt.input_field] = [
        ...hobbies.msg[dt.input_field].map((hdt) => hdt[dt.field_name])].join(", ");
    }else{
      hobbies.msg[dt.input_field] = null
    }
  }
  // console.log(hobbies);
  var data = {
    groom_loc: groomLocation.suc > 0 ? groomLocation.msg : [],
    basic_info: userBasicInfo.suc > 0 ? userBasicInfo.msg : [],
    hobbies: hobbies.suc > 0 ? hobbies.msg : [],
    profile_img: profile_img.suc > 0 ? profile_img.msg : [],
    multiple_photo: multiple_photo.suc > 0 ? multiple_photo.msg : [],
    doc_type: doc_type.suc > 0 ? doc_type.msg : [],
    doc_file: doc_file.suc > 0 ? doc_file.msg :[],
    ac_for: ac_for,
    height: field_height,
    weight: field_weight,
    bod_type: field_body_type,
    mari_status: field_marital_status,
    eat_hab: field_Eating_Habits,
    dri_hab: field_Drinking_Habits,
    smoke_hab: field_Smoking_Habits,
    disable: field_disability,
    religion: field_Religion,
    emp_in: field_Employed_in,
    fam_value: field_family_value,
    fam_type: field_family_type,
    fam_status: field_family_status,
    fam_loc: field_Family_Location,
    father_occ: field_Father_Occupation,
    mother_occ: field_Mother_Occupation,
    no_of_bro: field_No_Brother,
    no_of_sis: field_No_Sister,
    id,
  };
  res.render("user/view", data);
  // console.log(data);
  // console.log(multiple_photo);

});

userRouter.post('/update_active_flag', async (req, res) => {
  var data = req.body
  var res_dt = await getActive(data);
  res.send(res_dt)
  console.log(res_dt);
})

userRouter.post('/update_profile_verify', async (req, res) => {
  var data = req.body;
  var res_dt = await getProfileVerify(data);
  res.send(res_dt)
})

module.exports = { userRouter };