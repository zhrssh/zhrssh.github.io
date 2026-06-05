import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default("Anonymous"),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    link: z.url().optional(),
    github: z.url().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
