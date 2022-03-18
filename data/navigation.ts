import { themeLight, themeDark } from "@/styles/theme"

export const nav = [
  {
    title: 'collection',
    path: '/',
    exact: 'false',
    cName: 'homeNav',
    aria: 'Collections',
    target: '_self',
    icon: false
  },
  {
    title: 'about',
    path: '/about',
    exact: '',
    cName: 'aboutNav',
    aria: 'About',
    target: '_self',
    icon: false
  },
  {
    title: 'github',
    path: 'https://github.com/amirardalan/synapsekit.com',
    exact: '',
    cName: 'githubNav',
    aria: 'View on GitHub',
    target: '_blank',
    icon: false
  }
]