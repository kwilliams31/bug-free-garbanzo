require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer')


pass: process.env.APP_PWD

app.get('/',  (req, res) => {

  res.send("hello world from express!")
 
})

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});

app.get('/mail', (req, res) => {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'krisew10@gmail.com',
        pass: 'password'
      }
    });
  
    var mailOptions = {
      from: 'krisew10@gmail.com',
      to: 'krisew10@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
  })