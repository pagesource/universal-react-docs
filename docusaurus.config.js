module.exports = {
  title: 'Universal React Docs',
  tagline:
    'An accelerator for great developer experience.',
  url: 'https://github.com/',
  baseUrl: '/universal-react-docs/',
  favicon: 'img/favicon.ico',
  projectName: 'universal-react-docs', // Usually your repo name.
  trailingSlash: true,
  organizationName: 'pagesource',
  themeConfig: {
    navbar: {
      title: 'Universal React',
      logo: {
        alt: 'Universal React Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/pagesource/universal-react-v2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Universal React`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
