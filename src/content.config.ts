import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Guides: one Markdown file per article in src/content/guides/<lang>/<slug>.md.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Eugene Asiedu'),
    /** Short label for the guide list. */
    kicker: z.string(),
  }),
});

export const collections = { guides };
