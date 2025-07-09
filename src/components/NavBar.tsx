import React from 'react';
import { Link } from 'react-router-dom';

const navStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  backdropFilter: 'saturate(180%) blur(10px)',
  background: 'linear-gradient(90deg, rgba(30,30,30,0.8), rgba(10,10,10,0.8))',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  alignItems: 'center'
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0.75em 2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const siteNameStyle: React.CSSProperties = {
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.4rem',
  display: 'flex',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  marginRight: '0.5em',
  backgroundImage: 'url(/assets/husky.png)', // Replace with your logo path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const linkGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: '2em',
  flex: 1,
  justifyContent: 'center',
};

const linkStyle: React.CSSProperties = {
  position: 'relative',
  color: '#ddd',
  textDecoration: 'none',
  fontSize: '1rem',
  padding: '0.25em 0',
  transition: 'color 0.2s, transform 0.2s',
};

const linkHoverStyle: React.CSSProperties = {
  color: '#fff',
  transform: 'scale(1.05)',
};

const underlineStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '0%',
  height: '2px',
  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
  transition: 'width 0.3s',
};

const navItems = [
  { label: 'Home',       href: '/'   , isRouter: false   },
  { label: 'Education',  href: '/#education', isRouter: false   },
  { label: 'Experience', href: '/#experience', isRouter: false   },
  { label: 'Extra curricular', href: '/#extra-curricular', isRouter: false   },
  { label: 'Skills',     href: '/#skills',     isRouter: false   },
  { label: 'Contact',    href: '/contact',    isRouter: true   },
  { label: 'Resume',     href: '/assets/Jester Shum Resume.pdf' }
];

const Navbar: React.FC = () => (
  <nav style={navStyle}>
    <div style={containerStyle}>
      <div style={siteNameStyle}>
        <div style={logoStyle} />
        jestershum.me
      </div>

      <div style={linkGroupStyle}>
        {navItems.map(({ label, href, isRouter }) => isRouter ? (
          <Link
            key={label}
            to={href}
            style={linkStyle}
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, linkHoverStyle);
              const underline = document.createElement('span');
              Object.assign(underline.style, underlineStyle, { width: '100%' });
              e.currentTarget.appendChild(underline);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, linkStyle);
              const span = e.currentTarget.querySelector('span');
              if (span) span.remove();
            }}
          >
            {label}
          </Link>
        ) : (
          <a
            key={href}
            href={href}
            style={linkStyle}
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, linkHoverStyle);
              const underline = document.createElement('span');
              Object.assign(underline.style, underlineStyle, { width: '100%' });
              e.currentTarget.appendChild(underline);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, linkStyle);
              const span = e.currentTarget.querySelector('span');
              if (span) span.remove();
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;

