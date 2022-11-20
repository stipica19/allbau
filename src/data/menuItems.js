export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },

  {
    title: 'uber uns',
    url: '/uber-uns',
    submenu: [
      {
        title: 'Kontakt',
        url: 'kontakt',
      },
      {
        title: 'funktionare',
        url: 'funktionare',
      },
      {
        title: 'route planen',
        url: 'route-planen',
      },
    ],
  },
  {
    title: 'Verkaufen',
    url: '/verkaufen',
    submenu: [
      {
        title: 'zäune',
        url: '/verkaufen/zäune',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'Mettalprodukte',
        url: '/verkaufen/mettalprodukteo',
      },
      {
        title: 'Fliesen',
        url: '/verkaufen/fliesen',
      },
      {
        title: 'naturstein',
        url: '/verkaufen/naturstein',
      },
      {
        title: 'carport',
        url: '/verkaufen/carport',
      },
      {
        title: 'pergole',
        url: '/verkaufen/pergole',
      },
      {
        title: 'Baumaterial',
        url: '/verkaufen/baumaterial',
      },
      {
        title: 'beton',
        url: '/verkaufen/beton',
      },
      {
        title: 'holz',
        url: '/verkaufen/holz',
      },
    ],
  },
];
