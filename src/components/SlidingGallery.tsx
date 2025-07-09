import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ThumbnailCard from './ThumbnailCard';
import { boxDefault } from '../assets/themes';

interface CardItem {
  title: string;
  img: string;
  url: string;
}

const SlidingGallery: React.FC = () => {
  const cards : Array<CardItem> = [
    {
      "title": "Personal Portfolio Template",
      "img": "/assets/portfolio.png",
      "url": "https://docs.google.com/spreadsheets/d/14cE8UFOUEYAN9bEooecDeMe-Y4Rx8Dct-mrEjzsxsyI/edit?gid=0#gid=0"
    },
    {
      "title": "website i thought looked cool",
      "img": "/assets/stuff/old_website.png",
      "url": "https://benjaminsoyh.github.io/catamiogo-web/"
    },
    {
      "title": "Consulting Report I did for a Small Business",
      "img": "/assets/company/freshfam.png",
      "url": "/assets/Fresh Family Report.pdf"
    },
    {
      "title": "domain I own",
      "img": "/assets/image.png",
      "url": "https://ratamigo.me"
    }
  ]
  
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        padding: '2em clamp(1em, 5vw, 4em)',
        boxSizing: 'border-box',
        margin: '0 auto',
      ...boxDefault,

      }}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.5}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <ThumbnailCard
              imageSrc={card.img}
              pageName={card.title}
              url={card.url}
              height="10em"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingGallery;

