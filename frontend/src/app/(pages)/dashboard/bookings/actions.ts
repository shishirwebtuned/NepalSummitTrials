// app/(pages)/dashboard/bookings/actions.ts
"use server";
import { createClient } from "@/lib/supabase/server";

export async function getBookings() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select(
      `
      *,
      treks ( name )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return (
    data?.map((b) => ({
      ...b,
      trek_name: (b.treks as any)?.name ?? null,
    })) ?? []
  );
}
