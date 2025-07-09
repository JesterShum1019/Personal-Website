import React from 'react';
import TopicBreaker from '../components/TopicBreaker';
// import friends from '../assets/friends.json';
import { theme } from '../assets/themes';

const ContactPage: React.FC = () => {

  const friends = [
    {
        "name": "Daniel",
        "url": "https://linkie.shedaniel.me",
        "description": "I'm still learning code written by him in 2019"
    },
    {
        "name": "Vishal ",
        "url": "https://vishalsathambakkam.com",
        "description": "Most interviews I have ever seen someone do"
    },
    {
        "name": "Vani",
        "url": "https://vaniagarwal343.github.io/personal-website",
        "description": "TA'd for my class I got a 2.0 in"
    }
]
  return (
    <div style={{ padding: '2em 10vw' }}>
      <TopicBreaker title="My Friends" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2em',
          gap: '1em',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {friends.map((friend, idx) => (
          <a
            key={idx}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              maxWidth: '600px',
              display: 'block',
              padding: '1em',
              textDecoration: 'none',
              boxSizing: 'border-box',
              boxShadow: theme.shadows.medium,
              borderRadius: theme.radius.default
            }}
          >
            <p style={{ margin: 0, color: theme.colors.primary }}>
              {friend.url.replace("https://", "")}
            </p>
            <p style={{ margin: "0 0 0 5em "}}>{friend.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
