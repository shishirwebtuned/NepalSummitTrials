// app/actions/bookings.ts
"use server";
import { createClient } from "@/lib/supabase/server";

export async function createBooking(
  bookingData: any,
  trekId: string,
  paymentMethod: string,
) {
  const supabase = await createClient();

  const lead = bookingData.travelers?.[0];

  const { data, error } = await supabase
    .from("bookings")
    .insert({
      trek_id: trekId,
      start_date: bookingData.startDate,
      num_adults: bookingData.numAdults,
      num_children: bookingData.numChildren,
      base_amount: bookingData.totalAmount,
      vat_amount: bookingData.vatAmount,
      total_with_vat: bookingData.totalWithVat,
      advance_amount: bookingData.advanceAmount,
      remaining_amount: bookingData.remainingAmount,
      lead_title: lead?.title,
      lead_first_name: lead?.firstName,
      lead_last_name: lead?.lastName,
      lead_gender: lead?.gender,
      lead_email: lead?.email,
      lead_phone: lead?.phone,
      lead_nationality: lead?.nationality,
      lead_mailing_address: lead?.mailingAddress,
      lead_city: lead?.city,
      lead_province: lead?.province,
      emergency_contact_name: lead?.emergencyContact?.fullName,
      emergency_contact_relationship: lead?.emergencyContact?.relationship,
      emergency_contact_phone: lead?.emergencyContact?.phone,
      travelers: bookingData.travelers,
      payment_method: paymentMethod.toLowerCase(),
      payment_status: "pending",
      status: "pending",
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return data;
}
