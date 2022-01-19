import { home, cart, heart, layout, featherPackage, droplet } from '../icons'

export const sidebarMenu = [
  {
    id: 1,
    name: 'Home',
    icon: home,
    route: '/',
  },
  {
    id: 2,
    name: 'Products',
    icon: featherPackage,
    route: '/products',
  },
  {
    id: 3,
    name: 'Cart',
    icon: cart,
    route: '/cart',
  },
  {
    id: 4,
    name: 'Wishlist',
    icon: heart,
    route: '/wishlist',
  },
  {
    id: 5,
    name: 'Theme',
    icon: droplet,
    route: '/theme',
  },
  {
    id: 6,
    name: 'PageLayouts',
    icon: layout,
    route: '/page-layouts',
  },
]
