export interface Experience {
    title: string;
    company: string;
    dates: string;
    details: string;
    team: string | null;
    imgUrl: string | null;
    type: 'Development' | 'Leadership' | 'Community';
  }