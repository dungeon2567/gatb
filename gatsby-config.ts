import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Mantine Site`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-resolve-src"],
};

export default config;
