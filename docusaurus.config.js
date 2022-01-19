const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SODA for SPARC",
  tagline:
    "Simplifying data curation for researchers funded by the NIH SPARC initiative",
  url: "https://docs.sodaforsparc.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "fairdataihub",
  projectName: "SODA-for-SPARC",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/fairdataihub/SODA-for-SPARC-Docs/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: `Upcoming 🚧`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/fairdataihub/SODA-for-SPARC-Docs/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-6PG193J31V",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SODA for SPARC",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/fairdataihub/SODA-for-SPARC",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://fairdataihub.org/contact-us",
            label: "Contact Us",
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
                label: "Changelog",
                to: "/docs/changelog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: "Homepage",
                href: "https://fairdataihub.org",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/fairdataihub",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/fairdataihub/SODA-for-SPARC",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fair Data Innovations Hub.`,
      },
      colorMode: {
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "announcement-bar",
        content:
          '⭐️ <strong> If you like SODA for SPARC, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/fairdataihub/SODA-for-SPARC">Github</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fairdataihub">Twitter</a>. </strong>',
        backgroundColor: "#ecfdf5",
        textColor: "#0f172a",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "SODA for SPARC, SPARC, SODA, fair data, fairhub, fairdataihub, software",
        },
        {
          name: "description",
          content:
            "SODA for SPARC is an application created under the guidance of the NIH SPARC program to allow research members funded by SPARC to submit open and FAIR datasets.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Fair Data Innovations Hub",
        },
      ],
    }),

  scripts: [
    {
      src: "scripts/uploadcare.js",
      defer: true,
    },
  ],
};

module.exports = config;
