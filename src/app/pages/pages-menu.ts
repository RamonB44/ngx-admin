import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'EzWeather',
    group: true,
    icon: 'thermometer-outline',
  },
  {
    title: 'Sistema',
    icon: 'lock-outline',
    expanded: true,
    children: [
      {
        title: 'Sensores',
        icon: 'radio-outline'
      },
      {
        title: 'Graficos',
        icon: 'pie-chart-outline'
      }
    ],
  },
  {
    title: 'Configuraciones',
    group: true,
  },
  {
    title: 'Parametros',
    icon: 'options-outline',
    children: [
      {
        title: 'Rango de lectura',
        icon: 'eye-off-2-outline'
      },
      {
        title: '...',
      }
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
