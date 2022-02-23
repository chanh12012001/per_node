const User = require('../models/user_model')
const SmsConfig = require('../config/sms.config')
const bcrypt = require('bcryptjs')
const tokenController = require('../controllers/verify_token')

const otpGenerator = require("otp-generator");
const crypto = require("crypto");
const key = "verysecretkey"; // Key for cryptograpy. Keep it secret

const client = require('twilio')(SmsConfig.ACCOUNT_SID, SmsConfig.AUTH_TOKEN);
 
async function register(params, phoneNumber, callback) {
    var email = params.email
    const user = await User.findOne({email});

    if (user != null) {
        console.log(user.email)
        return callback({
            message: 'Email already exists.'
        })
    } else {
        User.create({
            phoneNumber: phoneNumber,
            name: '',
            dateOfBirth: '',
            sex: '',
            email: '',
            password: params.password    
        })
        .then((data) => {
            const token = tokenController.generateAccessToken(data._id)
            return callback(null, {auth: true, token})
        })
        .catch((error) => {
            return callback(error)
        })
    } 
}

async function login({phoneNumber, password}, callback) {
    const user = await User.findOne({phoneNumber});

    if (user != null) {
        if (bcrypt.compareSync(password, user.password)) {
            const token = tokenController.generateAccessToken(user._id)
            return callback(null, {...user.toJSON(), token})
        }
        else {
            return callback({
                auth: false,
                token: null
            })
        }
    } else {
        return callback({
            message: 'The phone doesn`t exist'
        })
    }
}

async function createNewOTP(params, callback) {

    var phoneNumber = params.phone
    
    const user = await User.findOne({phoneNumber});
    if (user != null) {
        return callback({
            message: 'Phone number already registered by another user.'
        })
    } else {
        // Generate a 4 digit numeric OTP
    const otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
      });
      const ttl = 5 * 60 * 1000; //5 Minutes in miliseconds
      const expires = Date.now() + ttl; //timestamp to 5 minutes in the future
      const data = `${params.phone}.${otp}.${expires}`; // phone.otp.expiry_timestamp
      const hash = crypto.createHmac("sha256", key).update(data).digest("hex"); // creating SHA256 hash of the data
      const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user
      // you have to implement the function to send SMS yourself. For demo purpose. let's assume it's called sendSMS
      //sendSMS(phone, `Your OTP is ${otp}. it will expire in 5 minutes`);
    
      console.log(`Your OTP is ${otp}. it will expire in 5 minutes`);    
      
      const from  = "+19036367833"
      const to = `+84${params.phone}`
      const text = `Your OTP is ${otp}. it will expire in 5 minutes`
      client.messages
  .create({
     body: text,
     from: from, 
     to: to
   })
  .then(message => console.log(message.sid));

      return callback(null, fullHash);
    }
  }
  
  async function verifyOTP(params, callback) {
    // Separate Hash value and expires from the hash returned from the user
    let [hashValue, expires] = params.hash.split(".");
    // Check if expiry time has passed
    let now = Date.now();
    if (now > parseInt(expires)) return callback("OTP Expired");
    // Calculate new hash with the same key and the same algorithm
    let data = `${params.phone}.${params.otp}.${expires}`;
    let newCalculatedHash = crypto
      .createHmac("sha256", key)
      .update(data)
      .digest("hex");
    // Match the hashes
    if (newCalculatedHash === hashValue) {
      return callback(null, "Success");
    }
    return callback("Invalid OTP");
  }
  

module.exports = {
    createNewOTP,
    verifyOTP,
    register,
    login
}