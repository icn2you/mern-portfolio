/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/26/2020
File:  index.js
Ver.:  0.1.0 20200826
       0.2.0 20200915

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
            {/* Padding must explicitly be set here to render
                properly on viewports less than 375px. */}
            <Col lg={8} className="pl-0 pr-0 text-lg-right">
              <NavBar />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-between">
            <Col lg={7} className="align-self-center text-lg-left">
              <Intro />
            </Col>
            <Col lg={5} className="align-self-center text-lg-right">
              <Portrait />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header
