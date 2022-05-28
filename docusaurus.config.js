module.exports = {
  title: 'Universal React',
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
      copyright: `Copyright © ${new Date().getFullYear()}, Made with ♥ by XE Community of Publicis Sapient. <br />Documentation site built with <a href="https://docusaurus.io/">Docusaurus<a/>.`,
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
