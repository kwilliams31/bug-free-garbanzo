require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {

//res.send("hello world from express!")
    res.render('index', {
        userName: "Krispy",
    })
 
})


app.post('/gmail', (req, res) => {

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    //host: 'smtp.gmail.com',
    //port: 465,
    //secure: true, // use SSL
      auth: {
        user: 'krisew10@gmail.com',
        pass: process.env.APP_PWD
      }
    });
  
    var mailOptions = {
      from: 'krisew10@gmail.com',
      to: '3344059509@vtext.com',
      subject: 'Sending Email using Node.js',
      text: 'Secret 1: You can park anywhere after 4:30 pm; Secret 2:'
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.redirect('/');
  
  })

  app.listen(PORT, () => {
    console.log(`Server is running & listening on port ${PORT}`);
  });