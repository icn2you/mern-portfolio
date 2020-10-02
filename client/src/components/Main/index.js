/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/26/2020
File:  index.js
Ver.:  0.1.0 20200826
       0.2.0 20200915

This script contains the Main React component of my developer portfolio.
***********************************************************************/import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ContactForm, Project } from '../'
import API from '../../utils/api'
import './style.scss'

const Main = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = () => {
    API.getPortfolioProjs('active=true')
      .then(res => setProjects(res))
      .catch(err => console.error(err.stack))
  }

  return (
    <main>
      <div id="projects-container" className="skewed-container">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 id="portfolio">Portfolio</h1>
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
                  : ''
                }
              </div>
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

export default Main
