import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Project } from '..'
import './style.scss'

const PortfolioMain = ({ projects }) => {
  return (
    <main className="site">
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
                : 'My projects cannot be displayed at this time due to an issue with the database. Please check back again soon.'
              }
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default PortfolioMain
