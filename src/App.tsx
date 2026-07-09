import React, { Fragment, ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import asset from './assets/profile.json';

const profile = asset.profile;

const icons: Record<string, ReactElement> = {
  phone: (
    <svg
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28.1l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.3-11.1-28.1-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  ),
  mail: (
    <svg
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3C448 46.5 433.6 32 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 496 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  ),
  portfolio: (
    <svg
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
    </svg>
  )
};

function Header() {
  const { name, phone, mail, linkedin, github } = profile.overview;
  return (
    <div className="resume-header">
      <h1 className="resume-header-name">{name}</h1>
      <div className="resume-header-contacts">
        <span className="contact-item">
          {icons.phone}
          <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
        </span>
        <span className="contact-item">
          {icons.mail}
          <a href={`mailto:${mail}`}>{mail}</a>
        </span>
        <span className="contact-item">
          {icons.linkedin}
          <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
            {linkedin}
          </a>
        </span>
        <span className="contact-item">
          {icons.github}
          <a href={`https://${github}`} target="_blank" rel="noreferrer">
            {github}
          </a>
        </span>
      </div>
    </div>
  );
}

function Section(props: { title: string; children: ReactElement; className?: string }) {
  return (
    <Fragment>
      <Row className={`${props.className} my-3`}>
        <h1 className="section-title">{props.title}</h1>
        <div className="my-0">{React.cloneElement(props.children)}</div>
      </Row>
    </Fragment>
  );
}

function Chips() {
  return (
    <p className="mb-0">
      {profile.skills.map(it => (
        <span className="tech" key={it}>
          {it}
        </span>
      ))}
    </p>
  );
}

function About() {
  return (
    <div className="resume-about">
      <h2 className="resume-section-title">About Me</h2>
      <p className="resume-about-text mb-3">{profile.about}</p>
      <Chips />
    </div>
  );
}

function SelfExperience() {
  return (
    <div className="resume-section resume-section-last">
      <h2 className="resume-section-title">Self-driven experience &#38; open source</h2>
      {profile.contribution.map(it => (
        <div className="exp-item" key={it.url ?? it.summary}>
          <div className="exp-head">
            <span className="exp-title">
              {it.url ? (
                <a
                  className="exp-company"
                  href={`https://${it.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {it.url}
                </a>
              ) : (
                <span className="exp-company">{it.summary}</span>
              )}
            </span>
            <span className="exp-dates">{it.period}</span>
          </div>
          <ul className="mb-0">
            {it.responsibilities.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CommercialExperience() {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Commercial Experience</h2>
      {profile.experience.map(it => (
        <>
          <div className="exp-item" key={it.company}>
            <div className="exp-head">
              <span className="exp-title">
                <span className="exp-company">{it.company}</span>, {it.role},{' '}
                {it.location}
              </span>
              <span className="exp-dates">{it.period}</span>
            </div>
            {it.summary ? <p className="exp-summary">{it.summary}</p> : null}
            <ul className="mb-0">
              {it.responsibilities.map(it => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
          {it.company === 'BNP Paribas' ? (
            <>
              <br />
              <br />
            </>
          ) : (
            ''
          )}
        </>
      ))}
    </div>
  );
}

function Certification() {
  return (
    <Section
      title="Certification"
      className={profile.certification.length ? '' : 'd-none'}
    >
      <ul>
        {profile.certification.map(it => (
          <li key={it}>
            <p>{it}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function App() {
  return (
    <Container className="mt-4">
      <Header />
      <About />
      <CommercialExperience />
      <SelfExperience />
      <Certification />
    </Container>
  );
}

export default App;
