import { useEffect, useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import type { Experience } from '../types/experiences';
import { Column, Row } from '../components/Layouts';
import { boxDefault, theme } from '../assets/themes';
import SlidingGallery from '../components/SlidingGallery';
import { socials } from '../types/socials';
import TopicBreaker from '../components/TopicBreaker';
import LanguageTechStack from '../components/LanguageTechStack';
import React from 'react';
import NewExperienceCard from '../components/NewExperienceCard';
import EducationCard from '../components/EducationCard';


const heroStyle: React.CSSProperties = {
  width: '100%',
  padding: '4rem 1rem',
};

const heroContainerStyle: React.CSSProperties = {
  ...boxDefault,               // keeps any shared box styling
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#fff',
  borderRadius: '2rem',
  boxShadow: '0 0.5em 1em rgba(0,0,0,0.1)',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  margin: 0,
};


// 4. Content grid for Exp + Skills

function HomePage() {
  const [selectedType, setSelectedType] = useState<'Leadership' | 'Community'>('Leadership');
  
  const experienceData = [
    {
      "title": "Ambassador",
      "company": "UW Foster - Global Business Case Competition",
      "dates": "Jan 2025 - Mar 2025",
      "details": "Supported global case competition logistics and engage with 12+ international teams.",
      "team": null,
      "type": "Leadership",
      "imgUrl": "/assets/company/gbcc.png"
  
    },
    {
      "title": "Business Team - OutReach",
      "company": "Washington SuperBike Team",
      "dates": "Oct 2024 - Jun 2025",
      "details": "Outreached to corporate sponsors like Red Bull and Boeing to secure fundings",
      "team": null,
      "type": "Leadership",
      "imgUrl": "/assets/company/wst.png"
  
    },
    {
      "title": "Member",
      "company": "UW Corporate Banking Club",
      "dates": "Dec 2024 - Present",
      "details": "Building corporate banking knowledge and technical skills through events, case studies, and collaboration.",
      "team": null,
      "type": "Community",
      "imgUrl": "/assets/company/uwcbc.jpg"
  
    },
    {
      "title": "Library Ambassador",
      "company": "Shoreline Community College",
      "dates": "Oct 2023 - Jun 2024",
      "details": "Assisted students with research tools and technology while supporting daily library operations and services",
      "team": null,
      "type": "Community",
      "imgUrl": "/assets/company/scc.png"
  
    },
    {
      "title": "Event Planning Officer",
      "company": "SCC",
      "dates": "Oct 2022 - June 2022",
      "details": "Led planning and coordination of 10+ events and national DECA competitions, guiding 8 finalist teams and earning multiple awards.",
      "team": "DECA",
      "type": "Leadership",
      "imgUrl": "/assets/company/deca.jpg"
  
    },   
    {
      "title": "Co-founder/Vice President",
      "company": "SCC",
      "dates": "Oct 2022 - Jun 2024",
      "details": "Co-founded and led 10+ cultural events celebrating Japanese traditions and grew the club’s social media to 200+ followers",
      "team": "Japanese Culture Club",
      "type": "Community",
      "imgUrl": "/assets/company/jcc.png"
    }
  ]
  
  useEffect(() => {
    console.log(experienceData);
  },);

  const filteredExperiences = (experienceData as Experience[]).filter((exp) => {
    return exp.type === selectedType;
  });

  const majorStyle : React.CSSProperties  = {
    fontWeight: 'bold',
    color: theme.colors.primary,

  }


  return (
    <div style={{
      margin: '10vh 0',
    }}>
      <section style={heroStyle}>
        <div style={heroContainerStyle}>
          <h1 style={heroTitleStyle}>Jester Shum</h1>

          <Row style={{ gap: '1em', justifyContent: 'center' }}>
            {socials.map((social, idx) => (
              <a
              key={idx}
              href={social.link}
              target="_blank"
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
        
        <Column style={{ gap: '1rem'}}>
          <p style={{ fontStyle: 'italic', color: '#555' }}>
            A Visitor! This website is still in development, so it might look unfinished
            </p>
            <p>
              Hello! I'm Jester Shum, a junior at the University of Washington, Foster School of Business,
               majoring in <span style={majorStyle}>Finance </span> 
               and <span style={majorStyle}> Information Systems. </span>Growing up, I have always loved the feeling of making profits, especially when I started reselling things online, making a little money at a time and feeling proud of every win
            Which led to majoring in finance.
            </p>
            <p>
              Outside the classroom, I stay active in the community through clubs like SWECC and HCP. I’ve led projects and mentored others in React development. I'm also an upcoming ACMS ambassador.
            </p>
          </Column>
        </div>
      </section>

      <TopicBreaker id="education" title='Education'></TopicBreaker>

      <EducationCard
      school="University of Washington"
      degree="Bachelor of Business Administration"
      major="Concentration: Finance &amp; Information Systems"
      date="Sep 2024 - Jun 2027"
      content="Relevant Coursework: Economics, Accounting, Finance, Database Management, Investments"
      imgUrl="/assets/UW.png"
      />

      <EducationCard
      school="Shoreline Community College"
      degree="Associate of Arts"
      major='Concentratin: Business Administration'
      date="Sep 2022 - Jun 2024"
      content="Top 10 in DECA National Case Competition, Outstanding Student Service Award"
      imgUrl="/assets/shorelinecc.gif"
      />


      <TopicBreaker id='experience' title='Experiences'></TopicBreaker>
      
      <NewExperienceCard
        title="Accounting Intern"
        company="City of Seattle"
        dates="Jun 2025 - Aug 2025"
        experience={[
          "- Organized 200+ accounting records, reducing historical backlog by 25% and enhancing audit readiness.",
          "- Maintained 40+ financial workbooks and grant files to ensure compliance, supporting successful external funder audits.",
        ]}
        skills={["Accounting","Financial Reporting","Financial Analysis","Auditing","Data Entry","Excel","Budgeting"]}
        imgUrl="/assets/company/cityofseattle.png"
      />

      <NewExperienceCard
        title="Scribe"
        company="UW Foster School of Business"
        dates="Mar 2025 - Jun 2025"
        experience={[
          "- Work alongside UW students with disabilities to scribe lecture notes and in-class assignments.",
          "- Administer exams to students during finals week and ensure their accommodations are met in a distraction-free testing space.",
        ]}
        skills={["Communication","Note Taking","Active Listening","Auditing","Data Entry","Excel","Budgeting"]}
        imgUrl="/assets/company/uwfoster.png"
      />

      <NewExperienceCard
        title="Student Consultant"
        company="Fresh Family LLC"
        dates="Jan 2025 - Mar 2025"
        experience={[
          "- Developed a B2B marketing plan tailored for government and private sector clients, increasing contract acquisition by 30%.",
          "- Conducted financial analysis and identifying cost-reduction strategies to improve profitability by 15% and reduce operational expenses by $100K.",
        ]}
        skills={["Market Research","Business Analysis","Project Management","B2B Marketing","Strategic Planning","Financial Analysis"]}
        imgUrl="/assets/company/freshfam.png"
      />

      <NewExperienceCard
        title="Marketing Intern"
        company="Leaner Startups"
        dates="Oct 2023 - Mar 2024"
        experience={[
          "- Optimizing 4 marketing campaigns that increased customer reach by 25% and secured two new sponsorships.",
          "- Operated data pipelines with MailChimp and Looker’s Studio improved campaign performance by 40%."
        ]}
        skills={["Data Analytics", "Digital Marketing","Marketing Communication","Looker Studio","MailChimp"]}
        imgUrl="/assets/company/Leaner_startups.jpeg"
      />  


        <TopicBreaker id='extra-curricular' title='Extra Curricular'></TopicBreaker>

      <section id="experiences" style={{ margin: '0 20vw' }}>

        <Row style={{ gap: '1em', marginBottom: '1em', alignContent: 'space-evenly', justifyContent: 'center' }}>
          {['Leadership', 'Community'].map((type) => (
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
      <TopicBreaker title='Random stuff I worked on'></TopicBreaker>
      <SlidingGallery></SlidingGallery>
      <TopicBreaker id='skills' title='Skills'></TopicBreaker>
      <LanguageTechStack></LanguageTechStack>


      </div>
  );
}


export default HomePage;