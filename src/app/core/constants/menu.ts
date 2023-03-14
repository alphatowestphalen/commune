import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [

    {
      group: 'Acte de Naissance',
      separator: false,
      
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Première Copie',
          route: '/dashboard/premiere-copie',
          children: [{ label: 'Création Copie', route: '/dashboard/premiere-copie' }],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Service Général',
          route: '/dashboard',
          children: [
            { label: 'Adoption ', route: '/dashboard/adoption-naissance' },
            { label: 'Jugement', route: '/dashboard/jugement-naissance' },
            { label: 'Reconnaissance', route: '/dashboard/reconnaissance-naissance' },
       
          ],
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Bulletin de Naissance',
          route: '/dashboard/bulletin-naissance-list',
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
          route: '/dashboard/mariage-list',
        },
        {
          icon: 'assets/icons/outline/gift.svg',
          label: 'Acte de Divorce',
          route: '/dashboard/divorce-list',
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Acte de Celibataire',
          route: '/dashboard/celibat-list',
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
          route: '/dashboard/deces-list',
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
