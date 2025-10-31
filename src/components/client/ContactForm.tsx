"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/actions/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState = {
  message: null,
  errors: {},
  success: false,
};

function SubmitButton() {
  // This component will be created by `useFormStatus` in a future update
  // For now, we manually handle the pending state
  return (
    <Button type="submit" className="w-full font-bold">
      Send Message
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitInquiry, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Resetting form would require client-side state, which we avoid with server actions.
      // The form can be reset if needed by wrapping it in a <form> and calling form.reset()
    } else if (state.message && !state.success && Object.keys(state.errors ?? {}).length > 0) {
      // Create a single toast for all validation errors
      const errorMessages = Object.values(state.errors).flat().join("\n");
      toast({
        variant: "destructive",
        title: "Validation Failed",
        description: <div style={{ whiteSpace: 'pre-line' }}>{errorMessages}</div>,
      });
    } else if (state.message) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <form action={formAction} className="space-y-6">
        <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
            <Input id="name" name="name" placeholder="John Doe" required />
            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
        </div>
        <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
            {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
        </div>
        <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <Textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you"
                className="min-h-[120px]"
                required
            />
            {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
        </div>
      <SubmitButton />
    </form>
  );
}
