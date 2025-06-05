import React from 'react';
import { Row, Column } from './Layouts';
import type { Experience } from '../types/experiences';
import defaultLogo from '../assets/image.png';

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
    <Row style={{ padding: '1em', gap: '1em', alignItems: 'flex-start' }}>
      {/* Logo */}
      <Column>
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
          <h2 style={noPadding}>{title}</h2>
          <h4 style={noPadding}>{dates}</h4>
        </Row>

        {/* Company and Team */}
        <h3 style={noPadding}>
          {formatCompanyName(company)}
          {team ? ` @ ${team}` : ''}
        </h3>

        {/* Details (multi-line) */}
        <h4 style={{ ...noPadding, whiteSpace: 'pre-wrap' }}>{details}</h4>
      </Column>
    </Row>
  );
};

export default ExperienceCard;
