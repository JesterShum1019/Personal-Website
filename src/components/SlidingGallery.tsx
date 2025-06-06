import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import cardsData from '../assets/stuff.json';
import ThumbnailCard from './ThumbnailCard';
import { theme } from '../assets/themes';

interface CardItem {
  title: string;
  img: string;
  url: string;
}

const SlidingGallery: React.FC = () => {
  const cards = cardsData as CardItem[];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        padding: '2em clamp(1em, 5vw, 4em)',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.background,
        margin: '0 auto',
        borderRadius: theme.radius.default,
        boxShadow: theme.shadows.medium,
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
