import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { answers, treks } = await req.json();

  const trekList = treks
    .map(
      (t: any) =>
        `- ID: ${t.id} | Name: ${t.name} | Difficulty: ${t.difficulty} | Duration: ${t.duration_days} days | Price: $${t.price_adult} | Category: ${t.category} | Best seasons: ${t.best_season?.join(", ") || "any"} | Highlights: ${t.highlights?.join(", ") || "none"}`,
    )
    .join("\n");

  const prompt = `You are a Nepal trekking expert. A user has answered a questionnaire and you must recommend the 3 best matching treks from the list below.

User preferences:
- Fitness level: ${answers.fitness}
- Available duration: ${answers.duration}
- Budget per person: ${answers.budget}
- Main goal: ${answers.goal}
- Group type: ${answers.group}
- Preferred season: ${answers.season}
- Accommodation preference: ${answers.accommodation}

Available treks:
${trekList}

Return ONLY a valid JSON array with exactly 3 objects. No explanation, no markdown, no backticks. Just the raw JSON array.

Format:
[
  {
    "trekId": "the-trek-uuid",
    "matchScore": 94,
    "reason": "2-3 sentence explanation of why this trek fits the user's specific answers"
  }
]

Rules:
- matchScore is a number 0-100
- Order by matchScore descending (best match first)
- reason must reference the user's specific answers (e.g. mention their fitness level, season, budget)
- Only use trek IDs from the list above
- If fewer than 3 treks exist, return all of them`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  let matches;
  try {
    const clean = text.replace(/```json|```/g, "").trim();
    matches = JSON.parse(clean);
  } catch {
    return NextResponse.json(
      { error: "Failed to parse AI response" },
      { status: 500 },
    );
  }

  return NextResponse.json({ matches });
}
