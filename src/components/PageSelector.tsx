import React from 'react';
import { Column } from './Layouts';

interface ThumbnailCardProps {
  imageSrc: string;
  pageName: string;
}

const cardStyle: React.CSSProperties = {
  width: '12.5em',          // ~200px if base font-size = 16px
  border: '0.0625em solid #ccc',
  borderRadius: '0.75em',
  overflow: 'hidden',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 0.25em 0.75em rgba(0, 0, 0, 0.05)',
  padding: '0.5em', // Adjusted for better spacing
//   padding: '0.5em 0.5em 0    .5em 0 '
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
  };

const textStyle: React.CSSProperties = {
  fontSize: '1em',
  textAlign: 'center',
  color: '#333',
  margin: 0
};

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ imageSrc, pageName }) => {
  return (
    <Column style={cardStyle}>
      <img src={imageSrc} alt={pageName} style={imageStyle} />
      <p style={textStyle}>{pageName}</p>
    </Column>
  );
};

export default ThumbnailCard;
