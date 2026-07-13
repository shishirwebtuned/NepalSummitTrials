// app/actions/newsletter.ts
"use server";
import { createClient } from "@/lib/supabase/server";

export async function subscribeNewsletter(email: string, agreed: boolean) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email, agreed_to_policy: agreed });

  if (error) {
    if (error.code === "23505") {
      throw new Error("This email is already subscribed.");
    }
    throw new Error(error.message);
  }

  return { success: true };
}
