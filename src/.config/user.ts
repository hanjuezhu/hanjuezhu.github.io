import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: { title: "Hanjue Zhu",
    subtitle: 'part-time theoretical astrophysicist',
    author: 'Hanjue Zhu',
    description: 'Personal webpage',
    website: 'https://hanjuezhu.github.io/',
    navLinks: [
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Research',
        href: '/',
      },
      {
        name: 'CV',
        href: '/cv',
      },
    ],},
  
  appearance: {
      theme: 'system',
      locale: 'en-us',},
  latex: {
        katex: true,
      },

    
}
