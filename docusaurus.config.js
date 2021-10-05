const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PolkaHub",
  tagline: "Unify your Polkadot experience.",
  url: "https://polkadot.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "polkadotcom", // Usually your GitHub org/user name.
  projectName: "hub", // Usually your repo name.
  trailingSlash: false, // GitHub Pages adds a trailing slash to Docusaurus URLs by default. It is recommended to set a trailingSlash config (true or false, not undefined).
  themeConfig: {
    algolia: {
      apiKey: "YOUR_API_KEY",
      indexName: "polkahub", // Optional: see doc section below
      contextualSearch: true, // Optional: see doc section below
      appId: "YOUR_APP_ID", // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
    navbar: {
      title: "",
      logo: {
        alt: "PolkaHub  Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "/landingpage",
          label: "Landing page",
          position: "left",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/polkadotcom/hub",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/polkahub",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/polkahub",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/polkahub",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/polkadotcom/hub",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Polkahub.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/polkadotcom/hub/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/polkadotcom/hub/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
