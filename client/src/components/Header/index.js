/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/26/2020
File:  index.js
Ver.:  0.1.0 20200826

This script contains the Header React component of my developer 
portfolio.
***********************************************************************/
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Intro, NavBar, Portrait } from '../../components'
import './style.scss'

const Header = () => {
  return (
    <header>
      <div id="intro-container" className="skewed-container">
        <Container fluid="lg" className="text-center">
          <Row className="justify-content-between">
            <Col lg={4} className="text-lg-left">
              {/* Personal Logo */}
            </Col>
            <Col lg={8} className="text-lg-right">
              <NavBar />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-between">
            <Col lg={7} xl={8} className="text-lg-left">
              <Intro />
            </Col>
            <Col lg={5} xl={4} className="text-lg-right">
              <Portrait />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header
