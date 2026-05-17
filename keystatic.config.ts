import { config, collection, fields } from "@keystatic/core";

const hasGithubCreds =
  !!process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  !!process.env.KEYSTATIC_SECRET;

export default config({
  storage: hasGithubCreds
    ? {
        kind: "github",
        repo: {
          // Hardcoded — these are public constants, not secrets
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
      // Folder path where post files will be written inside the repo
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
