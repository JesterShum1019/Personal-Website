import React from 'react';
import { theme } from '../assets/themes';

const data: Record<string, string[]> = {
  'DCF Modeling': ['Python', 'HTML', 'CSS', 'React','Node.js'],
  'Precedent Transaction': [ 'MySQL', 'R Studio','Excel VBA', 'PPT',],
  'Portfolio Management': ['Looker Studio', 'Access'],
  '3-Statement Model/Analysis': [],
  'Market Research':[]
};

const LanguageTechStack: React.FC = () => {
  const technicalSkills = Object.values(data).flat();

  return (
    <div
      style={{
        margin: '5vh auto',
        maxWidth: '1000px',
        borderRadius: theme.radius.default,
        padding: '2rem',
        backgroundColor: theme.colors.background,
      }}
    >
      <h3 style={{ color: theme.colors.primary, marginBottom: '1em' }}>
        Financials
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em', marginBottom: '2em' }}>
        {Object.keys(data).map((lang) => (
          <div
            key={lang}
            style={{
              padding: '0.5em 1em',
              backgroundColor: theme.colors.border,
              color: theme.colors.text,
              borderRadius: theme.radius.default,
              fontWeight: 500,
            }}
          >
            {lang}
          </div>
        ))}
      </div>

      <h3 style={{ color: theme.colors.primary, marginBottom: '1em' }}>
        Technical Skills
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
        {technicalSkills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: '0.5em 1em',
              backgroundColor: theme.colors.border,
              color: theme.colors.text,
              borderRadius: theme.radius.default,
              fontWeight: 500,
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageTechStack;
