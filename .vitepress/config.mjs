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
    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
      ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

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
