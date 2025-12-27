import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Route Keeper',
  tagline: 'Your React Route Guardian - The superhero your React app deserves!',
  favicon: 'img/logo.jpg',
  trailingSlash: false,

  future: {
    v4: true,
  },

  // GitHub Pages deployment settings
  url: 'https://isaacprogi.github.io',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/routekeeper-docs/'
    : '/',
  organizationName: 'isaacprogi',
  projectName: 'routekeeper-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: false,
          // Remove routeBasePath: '/' - let docs be at /docs
          // routeBasePath: 'docs', // Default is 'docs'
          exclude: ['**/LICENSE', '**/LICENSE.md'],
          editUrl: 'https://github.com/isaacprogi/routekeeper-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Route Keeper',
      logo: {
        alt: 'Route Keeper Logo',
        src: 'img/logo.jpg', // ← from static/img
      },

      items: [
        // Simple link to docs
        {
          to: '/docs', // Link to docs at /docs
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://github.com/isaacprogi/routekeeper-react',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/routekeeper-react',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/isaacprogi/routekeeper-react',
            },
            {
              label: 'Issues',
              href: 'https://github.com/isaacprogi/routekeeper-react/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NPM Package',
              href: 'https://www.npmjs.com/package/routekeeper-react',
            },
            {
              label: 'MIT License',
              href: 'https://github.com/Isaacprogi/routekeeper-react/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Route Keeper by Isaac Anasonye.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;