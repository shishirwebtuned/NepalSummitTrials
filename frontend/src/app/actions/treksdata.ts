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
