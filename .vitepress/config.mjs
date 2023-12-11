import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin()] },
  title: "grunt DNA",
  description: "An assessment of grunt's digital footprint, 2024 (ongoing)",
  base: '/grunt-digital-audit/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.svg',
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    externalLinkIcon: true,
    cleanUrls: true,
    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
      ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],

    // head: [
    //   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    //   ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    //   ['meta', { name: 'theme-color', content: '#5f67ee' }],
    //   ['meta', { name: 'og:type', content: 'website' }],
    //   ['meta', { name: 'og:locale', content: 'en' }],
    //   ['meta', { name: 'og:site_name', content: 'VitePress' }],
    //   ['meta', { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    //   ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    // ],

    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'What is this?',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/introduction' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          // { text: 'Routing', link: 'routing' },
          // { text: 'Deploy', link: 'deploy' }
        ]
      },
      {
        text: 'Exhibitions & Programming',
        collapsed: false,
        items: [
          // { text: 'Markdown Extensions', link: 'markdown' },
          // { text: 'Asset Handling', link: 'asset-handling' },
          // { text: 'Frontmatter', link: 'frontmatter' },
          // { text: 'Using Vue in Markdown', link: 'using-vue' },
          // { text: 'Internationalization', link: 'i18n' }
        ]
      },
      {
        text: 'Outreach & Community',
        collapsed: false,
        items: [
          { text: 'Mount Pleasant Community Art Screen', link: 'mpcas' },
          // { text: 'Extending the Default Theme', link: 'extending-default-theme' },
          // { text: 'Build-Time Data Loading', link: 'data-loading' },
          // { text: 'SSR Compatibility', link: 'ssr-compat' },
          // { text: 'Connecting to a CMS', link: 'cms' }
        ]
      },
      {
        text: 'Archives & Access',
        collapsed: false,
        items: [
          // { text: 'MPA Mode', link: 'mpa-mode' },
          // { text: 'Sitemap Generation', link: 'sitemap-generation' }
        ]
      },
      { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present grunt'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/grunt-gallery/' },
      {
        icon: "instagram",
        link: "https://instagram.com/gruntgallery",
      },
    ]
  }
})
