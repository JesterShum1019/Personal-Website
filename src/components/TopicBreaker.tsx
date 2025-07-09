import React from 'react';

interface TopicBreakerProps {
  id?: string; 
  title: string;
}


const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: '4rem 20vw 2rem',
};

const titleStyle: React.CSSProperties = {
  position: 'relative',
  fontSize: '1.75rem',
  fontWeight: 600,
  margin: 0,
  paddingBottom: '0.25rem',
};


const lineStyle: React.CSSProperties = {
  flex: 1,
  height: '1px',
  backgroundColor: '#ccc',
  marginLeft: '1rem',
};

export default function TopicBreaker({ id, title }: TopicBreakerProps) {
  return (
    <div id={id} style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={lineStyle} />
    </div>
  );
}
