import { NextResponse } from 'next/server'


export async function POST(req,res) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.password,
      }
    })

    const mailData = {
        from: req.body.email,
        to: process.env.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
      
      transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
        }else{
          console.log(info)
        }
      })
     
      return NextResponse.json({message:"succes"})
     
  }
  