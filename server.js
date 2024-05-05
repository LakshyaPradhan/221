const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"lakshyapradhan23@gmail.com",
        pass:"vcjl hlso gxmr mkxg"
    },
    secure:true
})