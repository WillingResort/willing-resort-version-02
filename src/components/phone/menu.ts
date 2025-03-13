// menu.ts
export const menuItems = [
  { label: 'ACCOMMODATION', href: '/accommodation', hasIcon: true, submenu: false },
  { label: 'DINING', href: '/dining', hasIcon: true,submenu: false },
  { label: 'WELLNESS', href: '/wellness', hasIcon: true,submenu: false },
  { label: 'EXPERIENCES', href: '#', hasIcon: true ,submenu: true,
    subLabel: [
      { label: 'Fortress & Palaces', href: '/experience/fortress-palaces' },
      { label: 'HIKING', href: '/experience/hiking' },
      { label: 'Community villages', href: '/experience/villages' },
      { label: 'OTHER ACTIVITIES', href: '/experience/other-activities' },
  ],
  },
  { label: 'FESTIVALS', href: '/festivals', hasIcon: true,submenu: false },
  { label: 'ABOUT', href: '/about', hasIcon: true,submenu: false },
];
