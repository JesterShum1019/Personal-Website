import React from 'react';
import { Row, Column } from './Layouts';
import type { Experience } from '../types/experiences';
import defaultLogo from '../assets/image.png';
import { theme } from '../assets/themes';

const ExperienceCard: React.FC<Experience> = ({
  title,
  company,
  dates,
  details,
  team,
  imgUrl,
  type = 'development', // Default to 'development' if not provided
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
      // boxShadow: theme.shadows.medium,
      borderRadius: theme.radius.default,
      backgroundColor: theme.colors.background,
      // border: '1px solid rgba(0, 100, 111, 0.2)',
       }}>
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
