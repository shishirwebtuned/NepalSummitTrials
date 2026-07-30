// app/(pages)/dashboard/treks/actions.ts
"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

async function uploadTrekImage(supabase: any, file: File, folder: string) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from("trek-images")
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase.storage.from("trek-images").getPublicUrl(filePath);
  return data.publicUrl as string;
}

function parseListField(formData: FormData, key: string): string[] {
  const raw = formData.get(key) as string;
  return raw
    ? raw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];
}

function parseItinerary(formData: FormData) {
  const raw = formData.get("itinerary") as string;
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function createTrek(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // Cover image
  const coverFile = formData.get("cover_image") as File;
  let coverUrl: string | null = null;
  if (coverFile && coverFile.size > 0) {
    coverUrl = await uploadTrekImage(supabase, coverFile, "covers");
  }

  // Gallery images (multiple files under same key)
  const galleryFiles = formData.getAll("gallery_images") as File[];
  const galleryUrls: string[] = [];
  for (const file of galleryFiles) {
    if (file && file.size > 0) {
      const url = await uploadTrekImage(supabase, file, "gallery");
      galleryUrls.push(url);
    }
  }

  const { error } = await supabase.from("treks").insert({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration_days: Number(formData.get("duration_days")),
    difficulty: formData.get("difficulty"),
    max_altitude: formData.get("max_altitude")
      ? Number(formData.get("max_altitude"))
      : null,
    price_adult: Number(formData.get("price_adult")),
    price_child: formData.get("price_child")
      ? Number(formData.get("price_child"))
      : null,
    category: formData.get("category"),
    cover_image: coverUrl,
    gallery: galleryUrls,
    highlights: parseListField(formData, "highlights"),
    itinerary: parseItinerary(formData),
    // includes: parseListField(formData, "includes"),
    // excludes: parseListField(formData, "excludes"),

    includes: (formData.get("includes") as string) || null,
    excludes: (formData.get("excludes") as string) || null,
    best_season: parseListField(formData, "best_season"),
    group_size: formData.get("group_size") || null,
    status: formData.get("status"),
    author_id: user.id,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/treks");
  return { success: true };
}

export async function updateTrek(id: string, formData: FormData) {
  const supabase = await createClient();

  const coverFile = formData.get("cover_image") as File;
  const removeCover = formData.get("remove_cover_image") === "true";

  let coverUrl: string | null | undefined = undefined;
  if (coverFile && coverFile.size > 0) {
    coverUrl = await uploadTrekImage(supabase, coverFile, "covers");
  } else if (removeCover) {
    coverUrl = null;
  }

  // New gallery uploads to append
  const newGalleryFiles = formData.getAll("gallery_images") as File[];
  const newGalleryUrls: string[] = [];
  for (const file of newGalleryFiles) {
    if (file && file.size > 0) {
      const url = await uploadTrekImage(supabase, file, "gallery");
      newGalleryUrls.push(url);
    }
  }

  // Existing gallery URLs the client kept (after any removals client-side)
  const keptGalleryRaw = formData.get("existing_gallery") as string;
  const keptGallery: string[] = keptGalleryRaw
    ? JSON.parse(keptGalleryRaw)
    : [];

  const updateData: any = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration_days: Number(formData.get("duration_days")),
    difficulty: formData.get("difficulty"),
    max_altitude: formData.get("max_altitude")
      ? Number(formData.get("max_altitude"))
      : null,
    price_adult: Number(formData.get("price_adult")),
    price_child: formData.get("price_child")
      ? Number(formData.get("price_child"))
      : null,
    category: formData.get("category"),
    gallery: [...keptGallery, ...newGalleryUrls],
    highlights: parseListField(formData, "highlights"),
    itinerary: parseItinerary(formData),
    // includes: parseListField(formData, "includes"),
    // excludes: parseListField(formData, "excludes"),

    includes: (formData.get("includes") as string) || null,
    excludes: (formData.get("excludes") as string) || null,

    best_season: parseListField(formData, "best_season"),
    group_size: formData.get("group_size") || null,
    status: formData.get("status"),
  };

  if (coverUrl !== undefined) updateData.cover_image = coverUrl;

  const { error } = await supabase
    .from("treks")
    .update(updateData)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/treks");
  return { success: true };
}

export async function deleteTrek(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("treks").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/treks");
}

export async function getTrek(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("treks")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getTreks() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("treks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
