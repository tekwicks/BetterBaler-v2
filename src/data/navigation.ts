import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: (servicesData.categories as Category[]).map(category => ({
      label: category.category,
      href: `/services/${category.slug}`,
    })),
  },
  {
    label: 'Government',
    href: '/government',
    children: [
      { label: 'Municipal Departments Directory', href: '/government?tab=departments' },
      { label: 'Executive Leadership (Mayor & Vice Mayor)', href: '/government?tab=executive' },
      { label: 'Sangguniang Bayan (Legislative)', href: '/government?tab=legislative' },
      { label: 'Open Governance & FOI', href: '/government?tab=transparency' },
    ],
  },
  {
    label: 'Transparency',
    href: '/transparency',
    children: [
      { label: 'BLGF Financial Performance', href: '/transparency' },
      { label: 'Annual LGU Budget Allocation', href: '/transparency' },
      { label: 'Infrastructure & Projects', href: '/transparency' },
      { label: 'Full Disclosure Policy (FDP)', href: '/transparency' },
    ],
  },
  {
    label: 'Statistics',
    href: '/statistics',
  },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'About',
      links: [
        { label: 'About the Portal', href: '/about' },
        // { label: 'Privacy Policy', href: '/privacy' },
        // { label: 'Terms of Use', href: '/terms' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Contact Us', href: '/about' },
        { label: 'Community Discord', href: '/discord' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 6)
          .map(category => ({
            label: category.category,
            href: `/services/${category.slug}`,
          })),
        { label: 'Hotlines', href: '/philippines/hotlines' },
        { label: 'Holidays', href: '/philippines/holidays' },
      ],
    },
    {
      title: 'Government',
      links: [
        { label: 'Transparency & Budget (BLGF)', href: '/transparency' },
        { label: 'Baler PSA Statistics', href: '/statistics' },
        { label: 'Open Data', href: 'https://data.gov.ph' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
        {
          label: 'Contact Center',
          href: 'https://contactcenterngbayan.gov.ph',
        },
        {
          label: 'Official Gazette',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
  ],
  socialLinks: [
    { label: 'Facebook', href: 'https://facebook.com/govph' },
    { label: 'Twitter', href: 'https://twitter.com/govph' },
    { label: 'Instagram', href: 'https://instagram.com/govph' },
    { label: 'YouTube', href: 'https://youtube.com/govph' },
  ],
};
