import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: ' Acte de Naissance',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Première Copie',
          route: '/dashboard',
          children: [{ label: 'Création Copie', route: '/dashboard/nfts' }],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Service Général',
          route: '/auth',
          children: [
            { label: 'Adoption ', route: '/auth/sign-up' },
            { label: 'Jugement', route: '/auth/sign-in' },
            { label: 'Reconnaissance', route: '/auth/forgot-password' },
       
          ],
        },
      ],
    },
    {
      group: ' Acte de Mariage',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/download.svg',
          label: 'Acte de Mariage ',
          route: '/download',
        },
        {
          icon: 'assets/icons/outline/gift.svg',
          label: 'Acte de Divorce',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Acte de Celibataire',
          route: '/users',
        },
      ],
    },
    {
      group: 'Acte de Decés',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Acte de Décés',
          route: '/settings',
        },

      ],
    },
    {
      group: ' Gestion Utilisateurs',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Liste des Utilisateurs',
          route: '/settings',
        },
       
      ],
    },
  ];
}
