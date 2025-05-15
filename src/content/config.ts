// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content', // for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    publishDate: z.date(), // Or z.string() if you prefer YYYY-MM-DD format directly
    description: z.string(), // Short summary for cards
    coverImage: z.object({ // For the main project image
      url: z.string(), // Path to the image, e.g., /images/portfolio/project-a/cover.jpg
      alt: z.string(),
    }),
    tags: z.array(z.string()), // Tech stack, roles, etc.
    client: z.string().optional(), // If it was a client project
    role: z.string().optional(),   // Your role in the project
    liveLink: z.string().url().optional(),
    repoLink: z.string().url().optional(),
    videoLink: z.string().url().optional(), // For a demo video (e.g., YouTube, Vimeo)
    featured: z.boolean().default(false),
    slides: z.array(
        z.object({
          url: z.string(),
          alt: z.string(), // Make alt text required
          caption: z.string().optional(), // Caption is optional
        })
      ).optional(),
    // You can add more fields like 'challenges', 'solutions', 'learnings'
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
};