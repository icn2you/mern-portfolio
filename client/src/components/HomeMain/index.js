/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/26/2020
File:  index.js
Ver.:  0.1.0 20200826
       0.2.0 20200915
       0.3.0 20201124

This script contains the HomeMain React component of my developer portfolio.
***********************************************************************/import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ContactForm, Project } from '..'
import './style.scss'

const HomeMain = ({ projects }) => {
  return (
    <main>
      <div id="projects-container" className="skewed-container">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 id="pinned-projects">Pinned Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="d-flex flex-wrap
                justify-content-sm-center justify-content-xl-between">
                { projects.length
                  ? projects.map((project, i) =>
                    <Project
                      key={project._id}
                      id={project._id}
                      title={project.title}
                      url={project.url}
                      repo={project.repo}
                      image={project.imagePath}
                      lang={project.programmingLangs}
                      tech={project.technologiesUsed}
                    />
                  )
                  : 'My projects cannot be displayed at this time due to an issue with the database. Please check back again soon.'
                }
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} id="porfolio-button" className="text-center">
              <Button href="/portfolio" variant="outline-portfolio">
                Complete Portfolio
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact-form-container" className="skewed-container">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 id="contact-me">Contact Me</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={9} xl={8}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  )
}

export default HomeMain
