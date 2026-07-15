// app/(pages)/dashboard/contacts/actions.ts
"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteContact(id: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/contacts");
}

export async function updateContactStatus(
  id: string,
  status: "read" | "replied",
) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("contact_messages")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/contacts");
}
