import { home, cart, layout, heart, grid, droplet, featherPackage } from '../icons'

export const sidebarPages = [
  { name: 'Home', icon: home, route: '/' },
  { name: 'Category', icon: grid, route: '/category' },
  { name: 'Products', icon: featherPackage, route: '/products' },
  { name: 'Cart', icon: cart, route: '/cart' },
  { name: 'Wishlist', icon: heart, route: '/wishlist' }
]

export const sidebarUserInterface = [
  { name: 'Theme', icon: droplet, route: '/theme' },
  { name: 'PageLayouts', icon: layout, route: '/page-layouts' },
]
