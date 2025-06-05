import { useEffect } from 'react';
import experienceData from '../assets/experiences.json';
import ExperienceCard from '../components/ExperienceCard';
import StarsBackground from '../components/starsbackground';

function HomePage() {
  useEffect(() => {
    console.log(experienceData);
  }, []); // run only on mount

  return (
    <>
      <StarsBackground />

      <header className="homepage-header">
        <div className="header-top">
          <img
            src="your-image-url.jpg" // replace with actual path or URL
            alt="Benjamin So"
            className="profile-img"
          />
          <h1>Benjamin So</h1>
        </div>

        <div className="intro-text">
          <p>
            Hi there! I’m an undergraduate student at the University of Washington, majoring in Applied Math and Electrical & Computer Engineering. While that’s technically the title, my main focus lies in software engineering.
          </p>
          <p>
            I use programming to streamline workflows and solve problems, and most of my projects revolve around building tools for other domains. I’ve dabbled in areas such as biology, human-centered design, multimedia, and more. Currently, I work at UW Housing & Food Services, where I’m developing a printer management program called <strong>Skittles</strong>.
          </p>
          <p>
            Outside the classroom, I stay active in the UW community through clubs like SWECC and HCP. While my main focus is outreach, I’ve led projects and mentored others in React development.
          </p>
        </div>
      </header>

      <section id="experiences">
        <h2>Experience</h2>
        {experienceData && experienceData.length > 0 ? (
          experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              companyName={exp.company}
              role={exp.title} // match the prop expected by ExperienceCard
              team={exp.team}
              description={exp.description}
              date={exp.date}
              location={exp.location}
              ImgUrl={exp.logo} // add this field to your JSON
            />
          ))
        ) : (
          <p>No experience data found.</p>
        )}
      </section>
    </>
  );
}

export default HomePage;
