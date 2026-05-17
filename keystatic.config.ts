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
          owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME!,
        },
      }
    : {
        kind: "local",
      },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
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
