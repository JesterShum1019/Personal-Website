import React from 'react';
import { boxDefault, theme } from '../assets/themes';

interface EducationCardProps {
  school: string;
  degree: string;
  major: string;
  date: string;
  content: string;
  imgUrl: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  school,
  degree,
  major,
  date,
  content,
  imgUrl,
}) => {
  return(
  <div
    style={{
      ...boxDefault,
      maxWidth: '900px',
      margin: '2em auto',
      backgroundColor: '#fff',
      borderRadius: '2rem',
      boxShadow: '0 0.5em 1em rgba(0,0,0,0.1)',
      padding: '2rem',
      position: 'relative'
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      {/* Left: text block */}
      <div style={{ 
        maxWidth: '75%'
        }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: theme.colors.primary,
            margin: '0 0 .5rem 0',
          }}
        >
          {school}
        </h1>
        <h3 style={{ margin: 0, 
          fontStyle: 'italic', 
          color: '#555',
          fontWeight: 600 
          }}>
          {degree}
        </h3>
        <h3 style={{ margin: 0, 
          fontStyle: 'italic', 
          color: '#555',
          fontWeight: 600  
          }}>
          {major}
        </h3>
        <p style={{ margin: '0.5rem 0 0 0' }}>{date}</p>
      </div>
  
      {/* Right: image */}
      <img
        src={imgUrl}
        alt="Education Icon"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '20%',
          objectFit: 'cover',
          marginRight: '1.5rem',
          flexShrink: 0,  // never shrink the image
          border: '1px solid'
        }}
      />
      
    </div>
  
    {/* Below: coursework */}
    <p style={{ 
      margin: 0,
     }}>
      {content}
    </p>
    <div style={{
      borderBottom: `4px solid ${theme.colors.primary}`,
      paddingBottom: '1rem',
      opacity: '0.8'
    }}>
    </div>
  </div>
  ); 
}

export default EducationCard;