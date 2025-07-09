import React from 'react';
import { Row, Column } from './Layouts';
import type { Experience } from '../types/experiences';
import defaultLogo from '../assets/image.png';
import { boxDefault } from '../assets/themes';

const ExperienceCard: React.FC<Experience> = ({
  title,
  company,
  dates,
  details,
  team,
  imgUrl,
}) => {
  const noPadding: React.CSSProperties = {
    padding: 0,
    margin: 0,
  };

  const formatCompanyName = (name: string): string =>
    name.replace(/university of washington/i, 'UW');

  return (
    <Row 
    style={{ 
      margin: '3em',
      padding: '1.5em',
      gap: '2em',
      alignItems: 'flex-start',
      ...boxDefault,

       }}>
      {/* Logo */}
      <Column style={{}}>
        <img
          src={imgUrl || defaultLogo}
          alt={`${company} logo`}
          style={{
            width: '4em',
            height: '4em',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </Column>

      {/* Content */}
      <Column style={{ alignItems: 'flex-start', flex: 1 }}>
        {/* Title and Dates */}
        <Row style={{ justifyContent: 'space-between', width: '100%' }}>
          <p style={noPadding}>{title}</p>
          <p style={noPadding}>{dates}</p>
        </Row>

        {/* Company and Team */}
        <p style={noPadding}>
        {team ? ` ${team} @ ` : ''}

          {formatCompanyName(company)}
        </p>

        {/* Details (multi-line) */}
        <p style={{ ...noPadding, whiteSpace: 'pre-wrap' }}>{details}</p>
      </Column>
    </Row>
  );
};

export default ExperienceCard;
