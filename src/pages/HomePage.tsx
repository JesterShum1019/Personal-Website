import { useEffect, useState } from 'react';
import experienceData from '../assets/experiences.json';
import ExperienceCard from '../components/ExperienceCard';
import type { Experience } from '../types/experiences';
import { Column, Row } from '../components/Layouts';
// import pfp from '../assets/pfp.png';
import NavBar from '../components/NavBar';
// import ThumbnailCard from '../components/ThumbnailCard';
import { theme } from '../assets/themes';
import SlidingGallery from '../components/SlidingGallery';
import { socials } from '../types/socials';

function HomePage() {
  const [selectedType, setSelectedType] = useState< 'development' | 'research' | 'community'>('development');

  

  useEffect(() => {
    console.log(experienceData);
  }, []);

  const filteredExperiences = (experienceData as Experience[]).filter((exp) => {
    return exp.type === selectedType;
  });

  return (
    <div style={{
      margin: '10vh 0',
    }}>
      <NavBar />
      <header
        className="homepage-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          // paddingTop: '5em',
          margin: '0 10vw',
          // boxShadow: theme.shadows.soft,
          borderRadius: theme.radius.default,
          backgroundColor: theme.colors.background,
        }}
      >
        <Row>

          <Column
            style={{
              // alignContent: 'flex-start',
              margin: '2em 10vw',
              fontSize: '1.25em',
              textAlign: 'left',
            }}
          >
            <Column>
  <h1>Benjamin So</h1>
  <Row style={{ gap: '1em', justifyContent: 'center' }}>
    {socials.map((social, idx) => (
      <a
        key={idx}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5em',
          textDecoration: 'none',
        }}
      >
        <img
          src={social.logo}
          alt={social.platform}
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </a>
    ))}
  </Row>
</Column>

            <p>
            A visitor! Hi there! 
            </p>
            <p>
              I’m an undergraduate student at the University of Washington, majoring in Applied Math and Electrical & Computer Engineering. While that’s technically the title, my focus is in software engineering.
            </p>
            <p>
            Most of my projects have been about building tools that support other fields like biology, human-centered design, and multimedia. Right now, I’m working at UW Housing & Food Services, where I'm developing a fun little printer management program called Skittles.            </p>
            <p>
              Outside the classroom, I stay active in the community through clubs like SWECC and HCP. I’ve led projects and mentored others in React development. I'm also an upcoming ACMS ambassador.
            </p>
          </Column>
        </Row>
      </header>
      <h2 style={{
          padding:'2em'
        }}>Experiences</h2>

      <section id="experiences" style={{ margin: '0 20vw' }}>

        <Row style={{ gap: '1em', marginBottom: '1em', alignContent: 'space-evenly', justifyContent: 'center' }}>
          {['development', 'research', 'community'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as typeof selectedType)}
              style={{
                padding: '0.5em 1em',
                borderRadius: '0.5em',
                border: selectedType === type ? '2px solid #fff' : '1px solid gray',
                backgroundColor: selectedType === type ? theme.colors.primary : ' rgba(55, 66, 82, 0.8)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </Row>

        { 
          filteredExperiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              team={exp.team}
              details={exp.details}
              dates={exp.dates}
              imgUrl={exp.imgUrl} 
              type={exp.type} />
          ))
        }
      </section>
      <h2 style={{
          padding:'2em'
        }}>Random stuff I worked on</h2>

      <SlidingGallery></SlidingGallery>
      </div>
  );
}

export default HomePage;
