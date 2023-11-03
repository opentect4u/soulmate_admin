module.exports = {
    ActiveKyc: (phone_no, pro_id) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: 'GET',
                url: 'http://sms.digilexa.in/http-api.php',
                qs: {
                  username: 'SOULMATE',
                  password: 'MYSLMT@5t6',
                  senderid: 'MYSLMT',
                  route: "7",
                  number: phone_no.toString(),
                  message: `Dear User, Your profile ID is ${pro_id} The admin has approved your KYC verifications -MY SOUL MATE`
                },
                headers: {Accept: '*/*'}
            };
        
            request(options, function (error, response, body) {
                if (error) 
                {
                  // throw new Error(error);
                  resolve({suc:0, msg: 'Message Not send'})
                }else{
                  console.log(body);
                  resolve({ suc: 1, msg: 'Message Sent' })
                }
            });
        })
    },
    DeActiveKyc: (phone_no, pro_id) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: 'GET',
                url: 'http://sms.digilexa.in/http-api.php',
                qs: {
                  username: 'SOULMATE',
                  password: 'MYSLMT@5t6',
                  senderid: 'MYSLMT',
                  route: "7",
                  number: phone_no.toString(),
                  message: `Dear User, Your profile ID is ${pro_id} The admin has declined your KYC verifications -MY SOUL MATE`
                },
                headers: {Accept: '*/*'}
            };
        
            request(options, function (error, response, body) {
                if (error) 
                {
                  // throw new Error(error);
                  resolve({suc:0, msg: 'Message Not send'})
                }else{
                  console.log(body);
                  resolve({ suc: 1, msg: 'Message Sent' })
                }
            });
        })
    },
    ActiveProf: (phone_no, pro_id) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: 'GET',
                url: 'http://sms.digilexa.in/http-api.php',
                qs: {
                  username: 'SOULMATE',
                  password: 'MYSLMT@5t6',
                  senderid: 'MYSLMT',
                  route: "7",
                  number: phone_no.toString(),
                  message: `Dear User, Your profile ID ${pro_id} has been activated by the admin -MY SOUL MATE`
                },
                headers: {Accept: '*/*'}
            };
        
            request(options, function (error, response, body) {
                if (error) 
                {
                  // throw new Error(error);
                  resolve({suc:0, msg: 'Message Not send'})
                }else{
                  console.log(body);
                  resolve({ suc: 1, msg: 'Message Sent' })
                }
            });
        })
    },
    DeActiveProf: (phone_no, pro_id) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: 'GET',
                url: 'http://sms.digilexa.in/http-api.php',
                qs: {
                  username: 'SOULMATE',
                  password: 'MYSLMT@5t6',
                  senderid: 'MYSLMT',
                  route: "7",
                  number: phone_no.toString(),
                  message: `Dear User, Your profile ID ${pro_id} has been deactivated by the admin -MY SOUL MATE`
                },
                headers: {Accept: '*/*'}
            };
        
            request(options, function (error, response, body) {
                if (error) 
                {
                  // throw new Error(error);
                  resolve({suc:0, msg: 'Message Not send'})
                }else{
                  console.log(body);
                  resolve({ suc: 1, msg: 'Message Sent' })
                }
            });
        })
    },
}