// app/(pages)/dashboard/blogs/actions.ts
"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function uploadCoverImage(supabase: any, file: File) {
  console.log("UPLOAD ATTEMPT — file:", file.name, file.size, file.type);

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
  const filePath = `covers/${fileName}`;

  const { error, data } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file);

  console.log("UPLOAD RESULT — error:", error, "data:", data);

  if (error) throw error;

  const { data: urlData } = supabase.storage
    .from("blog-images")
    .getPublicUrl(filePath);
  return urlData.publicUrl as string;
}

export async function createBlog(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const coverFile = formData.get("cover_image") as File;

  console.log("COVER FILE FROM FORMDATA:", coverFile, "size:", coverFile?.size);

  let coverUrl: string | null = null;
  if (coverFile && coverFile.size > 0) {
    coverUrl = await uploadCoverImage(supabase, coverFile);
  } else {
    console.log("NO FILE OR EMPTY FILE — skipping upload");
  }
  console.log("FINAL coverUrl before insert:", coverUrl);

  const tagsRaw = formData.get("tags") as string;

  const { error } = await supabase.from("blogs").insert({
    title: formData.get("title"),
    slug: formData.get("slug"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt") || null,
    category: formData.get("category"),
    tags: tagsRaw
      ? tagsRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [],
    status: formData.get("status"),
    cover_image: coverUrl,
    author_id: user.id,
    meta_title: formData.get("meta_title") || null,
    meta_description: formData.get("meta_description") || null,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/blogs");
  // redirect("/dashboard/blogs");
}

export async function updateBlog(id: string, formData: FormData) {
  const supabase = await createClient();

  const coverFile = formData.get("cover_image") as File;

  const removeCover = formData.get("remove_cover_image") === "true";

  let coverUrl: string | undefined = undefined;

  if (coverFile && coverFile.size > 0) {
    coverUrl = await uploadCoverImage(supabase, coverFile);
  } else if (removeCover) {
    coverUrl = null as any;
  }

  const tagsRaw = formData.get("tags") as string;

  const updateData: any = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    content: formData.get("content"),
    excerpt: formData.get("excerpt") || null,
    category: formData.get("category"),
    tags: tagsRaw
      ? tagsRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [],
    status: formData.get("status"),
    meta_title: formData.get("meta_title") || null,
    meta_description: formData.get("meta_description") || null,
  };
  if (coverUrl !== undefined) updateData.cover_image = coverUrl;

  const { error } = await supabase
    .from("blogs")
    .update(updateData)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/blogs");
  // redirect("/dashboard/blogs");
  return { success: true }; // no redirect here anymore
}

export async function deleteBlog(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/blogs");
}

export async function getBlog(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getBlogs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
