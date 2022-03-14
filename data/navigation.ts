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
    title: '@synapsekit',
    path: 'https://twitter.com/synapsekit',
    exact: '',
    cName: 'twitterNav',
    aria: '@synapsekit Twitter',
    target: '_blank',
    icon: false
  }
]