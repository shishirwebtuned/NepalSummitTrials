// lib/getTreksNav.ts
import { createClient } from "@/lib/supabase/server";

export async function getTreksNav() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("treks")
    .select("id, name, slug")
    .eq("status", "active")
    .order("created_at", { ascending: true });

  return data || [];
}

export async function getAllTreks() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("treks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
