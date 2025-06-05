import { useEffect } from 'react';
import experienceData from '../assets/experiences.json';
import ExperienceCard from '../components/ExperienceCard';
import type { Experience } from '../types/experiences';
import SpinningStars from '../components/SpinningStars';
import { Column, Row } from '../components/Layouts';
import pfp from '../assets/pfp.png'; // replace with actual path or URL
import NavBar from '../components/NavBar';
import ThumbnailCard from '../components/PageSelector';
// import StarsBackground from '../components/starsbackground';

// Define a TypeScript interface for experience entries

function HomePage() {
  useEffect(() => {
    console.log(experienceData);
  }, []); // run only on mount

  return (
    <>
    <NavBar/>
        <SpinningStars></SpinningStars>

      {/* <StarsBackground /> */}
      <header className="homepage-header" 
      style={{
        margin: '0 10vw',

      }}>
        <Row>
        <div className="header-top">
          <img
            src={pfp} // replace with actual path or URL
            alt="Benjamin So"
            className="profile-img"
            style={{
              width: '15em',
              height: '15em',
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
          <h1 style={{
            alignContent: 'center',
            textAlign: 'center',
          }}>Benjamin So</h1>
        </div>
        <Column style={{
          alignContent:'flex-start',
          margin: '2em 10vw',
        }}>
          <p>
            Hi there! I’m an undergraduate student at the University of Washington, majoring in Applied Math and Electrical & Computer Engineering. While that’s technically the title, my main focus lies in software engineering.
          </p>
          <p>
            most of my projects revolve around building tools for other domains. I’ve dabbled in areas such as biology, human-centered design, multimedia, and more. Currently, I work at UW Housing & Food Services, where I’m developing a printer management program called <strong>Skittles</strong>.
          </p>
          <p>
            Outside the classroom, I stay active in the UW community through clubs like SWECC and HCP. While my main focus is outreach, I’ve led projects and mentored others in React development. I'm also an upcoming ACMS ambassador
          </p>
        </Column>
        </Row>

      </header>

      <section id="experiences"
      style={{
        margin: '0 20vw',
      }}>
        <h2>Experience</h2>
        {experienceData && experienceData.length > 0 ? (
          (experienceData as Experience[]).map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              team={exp.team}
              details={exp.details}
              dates={exp.dates}
              imgUrl={exp.imgUrl}
            />
          ))
        ) : (
          <p>No experience data found.</p>
        )}
      </section>
      <ThumbnailCard imageSrc={pfp} pageName="fffff"></ThumbnailCard>
    </>
  );
}

export default HomePage;
