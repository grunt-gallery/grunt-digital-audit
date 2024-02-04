import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin()] },
  title: "grunt DNA",
  description: "An assessment of grunt's digital footprint, 2024 (ongoing)",
  // base: '/grunt-digital-audit/',
  srcExclude: ['**/README.md', '**/TODO.md'],
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
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['script', { src: 'https://cdn.userway.org/widget.js', 'data-account': 'B0I6yz9cSR' }]
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
          { text: 'Format', link: '/format' },
          { text: 'GitHub', link: '/github' },
          { text: 'Accessibility', link: '/accessibility' },
        ]
      },
      {
        text: 'Exhibitions & Programming',
        collapsed: false,
        items: [
          { text: 'grunt.ca', link: '/grunt-ca' },
          { text: 'Mount Pleasant Community Art Screen', link: '/mpcas' },
        ]
      },
      {
        text: 'Outreach & Community',
        collapsed: false,
        items: [
          { text: 'Outreach', link: '/outreach' },
          { text: 'Social Media', link: '/social-media' },
        ]
      },
      {
        text: 'Archives & Access',
        collapsed: false,
        items: [
          { text: 'archives.grunt.ca', link: 'archives-grunt-ca' },
          { text: 'Website Inventory', link: 'website-inventory' },
          { text: 'Backups', link: '/backups' },
          { text: 'Legacy Website Strategy', link: '/legacy-website-strategy' },
        ]
      },
      { text: 'Conclusion', link: '/conclusion' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present grunt'
    },

    socialLinks: [
      {
        icon: "instagram",
        link: "https://instagram.com/gruntgallery",
      },
      { 
        icon: 'github', 
        link: 'https://github.com/grunt-gallery/' 
      },  
    ]
  }
})
