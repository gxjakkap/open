import { DefaultTheme, defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open",
  description: "Embrace transparency",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: getSidebar({contentRoot: '/', contentDirs: ['2023'], collapsible: true, collapsed: false}) as DefaultTheme.Sidebar,

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/guntxjakka' },
      { icon: 'github', link: 'https://github.com/gxjakkap' }
    ],

    footer: {
      message: 'Contributing to transparency since 2023',
      copyright: 'Copyright © 2023-present <a href="https://guntxjakka.me">Jakkaphat Ch.</a>'
    }
  }
})
