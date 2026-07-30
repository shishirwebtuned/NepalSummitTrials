// lib/types/trek.ts
export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  highlights?: string; // rich text HTML from the editor
};

export type Trek = {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration_days: number;
  difficulty: string;
  max_altitude: number | null;
  price_adult: number;
  price_child: number | null;
  category: string;
  cover_image: string | null;
  gallery: string[] | null;
  highlights: string[] | null; // trip-level tags, unchanged
  itinerary: ItineraryDay[] | null;
  includes: string | null;
  excludes: string | null;
  best_season: string[] | null;
  group_size: string | null;
  status: "active" | "inactive";
};
