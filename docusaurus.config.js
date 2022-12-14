// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documents',
  tagline: 'Documents',
  url: 'https://hexo.run',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/minterjia/Docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/minterjia/Docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documents',
        logo: {
          alt: 'Logo',
          src: '/img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'hexo',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/minterjia',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://gitee.com/minterjia',
            label: 'Gitee',
            position: 'right',
          },
          {
            href: 'https://codepen.io/minterjia',
            label: 'Codepen',
            position: 'right',
          },
          {
            href: 'https://vercel.com/minterjia',
            label: 'Vercel',
            position: 'right',
          },
          {
            href: 'https://minterjia.com',
            label: 'Blog',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },

         {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://minterjia.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/minterjia',
              },
             {
                label: 'Gitee',
                href: 'https://gitee.com/minterjia',
              },
              {
                label: 'Codepen',
                href: 'https://codepen.io/minterjia',
              },
              {
                label: 'Vercel',
                href: 'https://vercel.com/minterjia',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} ?????????, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
