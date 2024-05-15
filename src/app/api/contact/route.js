const nodemailer = require("nodemailer");
const inlineCss = require('nodemailer-juice');
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

const user = process.env.user;
const pass = process.env.pass;

export async function POST(req, res) {
  console.log("Request Body:", req.body);
  const { name, email, company, phone, message, budget } = req.body;
  if (req.method === 'POST') {
    console.log("Received POST request");
    // if (!name || !email || !company || !message || !budget) {
    //   console.log('Data missing');
    //   return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    // }

    console.log('All data present');
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass
      }
    });
    transporter.use('compile', inlineCss());

    try {
      await transporter.sendMail({
        from: email,
        to: user,
        subject: `Contact Created | ${name}`,
        html: `<div style="width: 800px; display: flex; flex-direction: column; gap: 10px; justify-content:space-around; padding: 10px 20px; border-radius: 10px;">
              <div style="width: 400px;">
                <h3>An Contact has been Submitted</h3>
                <p>Details of Candidate</p>
                <p><strong>Name: </strong> ${name}</p>
                <p><strong>Email: </strong> ${email}</p>
                <p><strong>Company: </strong> ${company}</p>
                <p><strong>Phone: </strong> ${phone}</p>
                <p><strong>Message: </strong> ${message}</p>
                <p><strong>Budget: </strong> ${budget}</p>
              </div>
              <div style="width: 400px;">
                <img style="width:400px;" src="https://res.cloudinary.com/pragra/image/upload/v1712314985/brantford.png" alt="pragra" />
              </div>
            </div>`
      });

      return NextResponse.json({ message: 'Email Sent Successful',data:JSON.stringify(req.body) }, { status: 200 });

    } catch (error) {
      console.log("Error:", error);
      return NextResponse.json({ error: error.message || error.toString() }, { status: 500 });
    }
  }
}



export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

