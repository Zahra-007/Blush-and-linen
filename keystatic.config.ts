import { config, collection, fields } from "@keystatic/core";

// Vercel automatically exposes NEXT_PUBLIC_VERCEL_ENV to both client and server.
// In any Vercel environment (production or preview), use GitHub storage.
// Locally, it defaults to 'local' storage so local dev and builds work flawlessly.
const isVercel = !!process.env.NEXT_PUBLIC_VERCEL_ENV;

export default config({
  storage: isVercel
    ? {
        kind: "github",
        repo: {
          owner: "Zahra-007",
          name: "Blush-and-linen",
        },
      }
    : {
        kind: "local",
      },

  ui: {
    brand: { name: "Blush & Linen" },
  },

  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedDate: fields.date({
          label: "Published Date",
          validation: { isRequired: true },
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
