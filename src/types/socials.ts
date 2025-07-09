export interface Social {
    platform: string;
    link: string;
    logo: string; // SVG URL
    hoverLogo?: string; // Optional hover logo
  }
  
  export const socials: Social[] = [
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jestershum/',
      logo: '/assets/linkedin.svg',
    },
    {
      platform: 'Email',
      link: 'mailto:jestersclong@gmail.com',
      logo: '/assets/email.svg',
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/js_cls/',
      logo: '/assets/ig.png',
    }  
  ];
  