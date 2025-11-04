"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

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
    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
        ],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ 
        Timestamp: new Date().toISOString(),
        Name: name, 
        Email: email, 
        Message: message 
    });

  } catch (error) {
    console.error("Error saving to Google Sheet:", error);
    return {
        message: "An error occurred while submitting your inquiry. Please try again later.",
        success: false,
    }
  }


  return {
    message: "Thank you! Your inquiry has been submitted successfully.",
    success: true,
  };
}
