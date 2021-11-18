import { home, cart, heart, layout, featherPackage, droplet } from '../icons'

export const sidebarMenu = [
  { name: 'Home', icon: home, route: '/' },
  { name: 'Products', icon: featherPackage, route: '/products' },
  { name: 'Cart', icon: cart, route: '/cart' },
  { name: 'Wishlist', icon: heart, route: '/wishlist' },
  { name: 'Theme', icon: droplet, route: '/theme' },
  { name: 'PageLayouts', icon: layout, route: '/page-layouts' },
]
