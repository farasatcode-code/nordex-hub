/**
 * The template reuses the same section markup on the home page and on the
 * dedicated pages, with slightly different vertical rhythm. Each section takes
 * one of these pairs so both usages render exactly as the original did.
 */
export type Spacing = {
  section: string;
  container: string;
};

export const homeSpacing: Spacing = {
  section: "py-5 mb-5",
  container: "container",
};

export const pageSpacing: Spacing = {
  section: "py-5 my-5",
  container: "container py-5",
};
