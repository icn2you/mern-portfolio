import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBar } from '../../components'
import './style.scss'

const SiteHeader = () => {
  return (
    <header className="site">
      <Container fluid="lg" className="text-center">
        <Row className="justify-content-between">
          <Col lg={4} className="text-lg-left">
            {/* Personal Logo */}
          </Col>
          {/* Padding must explicitly be set here to render
              properly on viewports less than 375px. */}
          <Col lg={8} className="pl-0 pr-0 text-lg-right">
            <NavBar />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default SiteHeader
