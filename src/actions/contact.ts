"use server";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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

  try {
    // Initialize Firebase on the server-side for this action
    const { firestore } = initializeFirebase();
    const inquiriesCollection = collection(firestore, "contactInquiries");
    
    await addDoc(inquiriesCollection, {
      ...validatedFields.data,
      submissionDate: serverTimestamp(),
    });

    return {
      message: "Thank you! Your inquiry has been submitted successfully.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting inquiry to Firestore:", error);
    // This will now catch specific Firebase errors on the server
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      message: `An unexpected error occurred: ${errorMessage}. Please try again.`,
      success: false,
    };
  }
}
