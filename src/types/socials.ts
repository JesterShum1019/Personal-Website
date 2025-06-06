export interface Social {
    platform: string;
    link: string;
    logo: string; // SVG URL
  }
  
  export const socials: Social[] = [
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/benjaminsoyh/',
      logo: '/assets/linkedin.svg',
    },
    {
      platform: 'Email',
      link: 'mailto:benso10@uw.edu',
      logo: '/assets/email.svg',
    },
  ];
  