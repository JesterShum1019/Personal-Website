// ThumbnailCard.tsx
import React, { useState } from 'react';
import { Column } from './Layouts';

interface ThumbnailCardProps {
  imageSrc: string;
  pageName: string;
  url?: string;
  height?: string | number;
  // Ensure link opens in new tab
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({
  imageSrc,
  pageName,
  url = '#',
  height = 'auto',
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  const [hovered, setHovered] = useState(false);

  const cardBase: React.CSSProperties = {
    width: '12.5em',
    height,
    border: '0.0625em solid #ccc',
    borderRadius: '0.75em',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0.25em 0.75em rgba(0, 0, 0, 0.05)',
    padding: '0.5em',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const hoverStyles: React.CSSProperties = hovered
    ? {
        transform: 'translateY(-0.25em) scale(1.03)',
        boxShadow: '0 1em 2em rgba(0, 0, 0, 0.15)',
      }
    : {};

  const wrapperStyle: React.CSSProperties = {
    display: 'inline-block',
    margin: '1em',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
    display: 'block',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1em',
    textAlign: 'center',
    color: '#333',
    margin: '0.75em 0',
    fontWeight: 600,
  };

  return (
    <a
      href={url}
      target={target}
      rel={rel}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={wrapperStyle}>
        <Column style={{ ...cardBase, ...hoverStyles }}>
          <img src={imageSrc} alt={pageName} style={imageStyle} />
          <p style={textStyle}>{pageName}</p>
        </Column>
      </div>
    </a>
  );
};

export default ThumbnailCard;
