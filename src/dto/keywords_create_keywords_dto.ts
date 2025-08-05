import { z } from "zod";

export const keywords_create_keywords_dto = {
  url: "/keywords/create_keywords",
  request: z.object({
    website_id: z.string(),
    keywords: z.array(
      z
        .string()
        .min(1, "Keyword is required")
        .max(255, "Keyword must be less than 255 characters")
        .trim()
        .refine((value: string) => value.length > 0, "Keyword cannot be empty")
    ),
  }),
  response: z.any(),
};
