"use server";

import { z } from "zod";
import { adminDb } from "@/firebase/admin";
import { FieldValue } from "firebase-admin/firestore";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function submitInquiry(prevState: State | null, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    // 1. Save to Firestore
    const inquiriesCollection = adminDb.collection("contactInquiries");
    const submissionDate = FieldValue.serverTimestamp();
    
    await inquiriesCollection.add({
      name,
      email,
      message,
      submissionDate,
    });

    // 2. Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL || email}>`,
      to: "swaliharoonmulla192@gmail.com",
      subject: `New Contact Inquiry from ${name}`,
      text: message,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      message: "Thank you! Your inquiry has been submitted successfully.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting inquiry or sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      message: `An unexpected error occurred: ${errorMessage}. Please try again.`,
      success: false,
    };
  }
}
