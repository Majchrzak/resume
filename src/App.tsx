import React, { Fragment, ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { profile } from './assets/profile.json';

function Section(props: { title: string; children: ReactElement; className?: string }) {
  return (
    <Fragment>
      <Row className={`${props.className} my-3`}>
        <h1 className="text-uppercase">
          <strong>{props.title}</strong>
        </h1>
        <div className="my-0">{React.cloneElement(props.children)}</div>
      </Row>
    </Fragment>
  );
}

function Overview() {
  return (
    <p className="headline my-3">
      {profile.overview.name}
      <h1>{profile.overview.title}</h1>
    </p>
  );
}

function About() {
  return (
    <Section title="About me">
      <p className="py-1">{profile.about}</p>
    </Section>
  );
}

function TechStack() {
  return (
    <Section title="Technical stack">
      <p className="pt-2">
        {profile.skills.map(it => (
          <span className="tech">{it}</span>
        ))}
      </p>
    </Section>
  );
}

function SelfExperience() {
  return (
    <Section title="Self-driven experience">
      <Fragment>
        <div className="mt-1">
          {profile.contribution.map(it => (
            <div>
              <p className="muted">
                {it.period}
                {it.url ? (
                  <Fragment>
                    {', '}
                    <a href={`https://${it.url}`} target="_balnk">
                      {it.url}
                    </a>
                  </Fragment>
                ) : null}
              </p>
              <ul className="mb-0">
                {it.responsibilities.map(it => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Fragment>
    </Section>
  );
}

function CommercialExperience(props: { className?: string }) {
  return (
    <Section title="Commercial experience" className={props.className}>
      <Fragment>
        {profile.experience.map(it => (
          <div className="my-2">
            <p className="text-uppercase">
              <strong>{it.role}</strong>
            </p>
            <p className="muted">
              {it.period}, {it.company}, {it.location}
            </p>
            <ul>
              {it.responsibilities.map(it => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </Fragment>
    </Section>
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

function Languages() {
  return (
    <Section title="Languages">
      <Row>
        <Col xs="6">
          <ul>
            {profile.language
              .filter((_, idx) => idx % 2 === 1)
              .map(it => (
                <li key={it.name}>
                  <p>{it.name}</p>
                  <p className="muted">{it.summary}</p>
                </li>
              ))}
          </ul>
        </Col>
        <Col xs="6">
          <ul>
            {profile.language
              .filter((_, idx) => idx % 2 === 0)
              .map(it => (
                <li key={it.name}>
                  <p>{it.name}</p>
                  <p className="muted">{it.summary}</p>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Section>
  );
}

function Contact() {
  return (
    <Section title="Contact">
      <Row>
        <Col sm="6">
          <ul className="mb-0">
            <li key="mail" className="mail">
              <a href={'mailto:' + profile.overview.mail}>{profile.overview.mail}</a>
            </li>
            <li key="phone" className="phone">
              {profile.overview.phone}
            </li>
            <li key="location" className="location">
              {profile.overview.location}
            </li>
          </ul>
        </Col>
        <Col sm="6">
          <ul className="mb-0">
            <li key="github" className="github">
              <a href={`https://${profile.overview.github}`} target="_balnk">
                {profile.overview.github}
              </a>
            </li>
            <li key="linkedin" className="linkedin">
              <a href={`https://${profile.overview.linkedin}`} target="_balnk">
                {profile.overview.linkedin}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Section>
  );
}

function Footer() {
  return (
    <div className="muted dimmed pb-2">
      I agree to the processing of personal data provided in this document for realising
      the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018
      (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of
      the European Parliament and of the Council of 27 April 2016 on the protection of
      natural persons with regard to the processing of personal data and on the free
      movement of such data, and repealing Directive 95/46/EC (General Data Protection
      Regulation)
    </div>
  );
}

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Overview />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <About />
          <TechStack />
          <CommercialExperience className="d-flex d-md-none" />
          <SelfExperience />
          <Certification />
          <Languages />
          <Contact />
          <Footer />
        </Col>
        <Col className="d-none d-md-flex">
          <CommercialExperience />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
