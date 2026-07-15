// app/actions/contact.ts
"use server";
import { createClient } from "@/lib/supabase/server";

export async function submitContactMessage(formData: {
  full_name: string;
  email: string;
  phone?: string;
  // destination?: string;
  travel_date?: string;
  num_travelers?: number;
  message: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("contact_messages").insert({
    full_name: formData.full_name,
    email: formData.email,
    phone: formData.phone || null,
    // destination: formData.destination || null,
    travel_date: formData.travel_date || null,
    num_travelers: formData.num_travelers || null,
    message: formData.message,
  });

  if (error) throw new Error(error.message);
  return { success: true };
}
