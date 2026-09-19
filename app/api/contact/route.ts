import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import { Waitlist } from "@/models/Waitlist";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    try {
      // 1. Connect to Database
      await connectToDatabase();

      // 2. Save to Database
      const newEntry = new Waitlist({ name, phone });
      await newEntry.save();
    } catch (dbError) {
      console.error("Database connection or save failed, skipping DB step:", dbError);
    }

    // 3. Send Email Notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: "New Waitlist Entry",
      text: `A new user has joined the waitlist!\n\nName: ${name}\nPhone: ${phone}`,
    };

    // If EMAIL_USER is not set, we skip email to avoid crashing, but log it
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Email credentials not provided. Skipping email notification.");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
