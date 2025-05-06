const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Make Your SPARC Data FAIR',
  // eslint-disable-next-line max-len
  tagline:
    // eslint-disable-next-line max-len
    'Easily make bioelectronic, neurophysiology, and other similar research data and computational models FAIR following the NIH SPARC guidelines',
  url: 'https://docs.sodaforsparc.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fairdataihub',
  projectName: 'SODA-for-SPARC',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fairdataihub/SODA-for-SPARC-Docs/edit/main/',
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
          editUrl: 'https://github.com/fairdataihub/SODA-for-SPARC-Docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-umami'],
  themes: ['docusaurus-theme-frontmatter'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SODA for SPARC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fairdataihub/SODA-for-SPARC',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://fairdataihub.org/contact-us',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Changelog',
                to: '/docs/developer-documentation/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: 'Homepage',
                href: 'https://fairdataihub.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fairdataihub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/fairdataihub/SODA-for-SPARC',
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
        id: 'announcement-bar',
        // eslint-disable-next-line max-len
        content: `⭐️ <strong> If you like SODA for SPARC, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/fairdataihub/SODA-for-SPARC">Github</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fairdataihub">Twitter</a>. </strong>`,
        backgroundColor: '#ecfdf5',
        textColor: '#0f172a',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image:
        // eslint-disable-next-line max-len
        'https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=SODA%20for%20SPARC&org=fairdataihub&description=Easily%20make%20bioelectronic%2C%20neurophysiology%2C%20and%20other%20similar%20research%20data%20and%20computational%20models%20FAIR%20following%20the%20NIH%20SPARC%20guidelines',
      metadata: [
        {
          name: 'keywords',
          content: 'SODA for SPARC, SPARC, SODA, fair data, fairhub, fairdataihub, software',
        },
        {
          name: 'description',
          // eslint-disable-next-line max-len
          content: `SODA for SPARC is an application created under the guidance of the NIH SPARC program to allow research members funded by SPARC to submit open and FAIR datasets.`,
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: 'Fair Data Innovations Hub',
        },
      ],
      algolia: {
        appId: '5C68KRW2LG',
        apiKey: 'f54157cf9bcb7564a29aa0995e0eb192',
        indexName: 'docs-sodaforsparc',
        contextualSearch: true,
      },
      umami: {
        websiteid: '4dfba05a-4a76-4d20-92b4-a7778613dbb0',
        src: 'https://umami.fairdataihub.org/mushroom',
      },
    }),

  scripts: [
    {
      src: 'scripts/uploadcare.js',
      defer: true,
    },
  ],
};

module.exports = config;
