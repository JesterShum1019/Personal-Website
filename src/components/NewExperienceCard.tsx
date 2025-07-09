import React from 'react';
import { Column, Row } from './Layouts';
import { boxDefault, theme } from '../assets/themes';

interface NewExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  experience: string[];
  skills: string[];
  imgUrl: string;
}

const NewExperienceCard: React.FC<NewExperienceCardProps> = ({
  title,
  company,
  dates,
  experience,
  skills,
  imgUrl,
}) => {

  // Card container
  const heroContainerStyle: React.CSSProperties = {
    ...boxDefault,
    maxWidth: '800px',
    margin: '2em auto',
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    boxShadow: '0 0.5em 1em rgba(0,0,0,0.1)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
      <div style={heroContainerStyle}>
        {/* Two‐column flex wrapper */}
        <Row
          style={{
            display: 'flex',
            alignItems: 'stretch',   // stretch both panels to same height
            gap: '1rem',
          }}
        >
          {/* Left panel: title & experience */}
          <div
            style={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Title section with colored border */}
            <div
              style={{
                borderLeft: `4px solid ${theme.colors.primary}`,
                paddingLeft: '0.75rem',
                paddingBottom: '1rem',
              }}
            >
              {/* Header row: image + title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <img
                  src={imgUrl}
                  alt={company}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                  }}
                />
                <div>
                  <h1
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: theme.colors.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </h1>
                  <h3
                    style={{
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    {company}
                  </h3>
                  <h3
                    style={{
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    ({dates})
                  </h3>
                </div>
              </div>

              {/* Experience list */}
              <div style={{ marginTop: '1rem' }}>
                <h2
                  style={{
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  Experience
                </h2>
                {experience.map((item, idx) => (
                  <p
                    key={idx}
                    style={{
                      margin: '0.5rem 0',
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: skills */}
          <Column
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: '2rem',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontWeight: 700,
              }}
            >
              Skills
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5em',
                marginTop: '0.5rem',
              }}
            >   
              {skills.map((skill, idx) => (
                <h5
                  key={idx}
                  style={{
                    margin: 0,
                    borderRadius: '0.5em',
                    backgroundColor: theme.colors.secondary,
                    padding: '0.2em',
                    fontWeight: 700,
                    textAlign: 'center',
                    width: 'fit-content',
                  }}>
                  {skill}
                </h5>
              ))}
            </div>
          </Column>
        </Row>
      </div>
  );
};

export default NewExperienceCard;
