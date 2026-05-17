import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER!,
      name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME!,
    },
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
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
