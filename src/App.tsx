import React, { Fragment, ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { profile } from './assets/profile.json';

function Section(props: { title: string; children: ReactElement }) {
  return (
    <Fragment>
      <Row className="my-3">
        <h1 className="text-uppercase">
          <strong>{props.title}</strong>
        </h1>
        <div className="my-0">{React.cloneElement(props.children)}</div>
      </Row>
    </Fragment>
  );
}

function App() {
  return (
    <Container>
      <Row>
        <Col>{profile.overview.name}</Col>
      </Row>
      <Row>
        <Col md="12" lg="6">
          <Section title="About me">
            <p className="py-1">{profile.about}</p>
          </Section>
          <Section title="Technical stack">
            <p className="pt-2">
              {profile.skills.map(it => (
                <span className="tech">{it}</span>
              ))}
            </p>
          </Section>
          <Section title="Non-commercial contribution">
            <ul>
              {profile.contribution.map(it => (
                <li>{it}</li>
              ))}
            </ul>
          </Section>
          <Section title="Certification">
            <ul>
              {profile.certification.map(it => (
                <li>{it}</li>
              ))}
            </ul>
          </Section>
          <div>
            I agree to the processing of personal data provided in this document for
            realising the recruitment process pursuant to the Personal Data Protection Act
            of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with
            Regulation (EU) 2016/679 of the European Parliament and of the Council of 27
            April 2016 on the protection of natural persons with regard to the processing
            of personal data and on the free movement of such data, and repealing
            Directive 95/46/EC (General Data Protection Regulation)
          </div>
        </Col>
        <Col>
          <Section title="Commercial experience">
            <Fragment>
              {profile.experience.map(it => (
                <div>
                  <p className="text-uppercase">
                    <strong>{it.role}</strong>
                  </p>
                  <p className="muted">
                    {it.period}, {it.company}, {it.location}
                  </p>
                  <ul>
                    {it.responsibilities.map(it => (
                      <li>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Fragment>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
