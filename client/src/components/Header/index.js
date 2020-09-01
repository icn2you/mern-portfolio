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
    <header className="skewed-container">
      <Container>
        <Row className="justify-content-between">
          <Col lg={4} className="text-center text-lg-left">
            {/* Personal Logo */}
          </Col>
          <Col lg={8} className="text-center text-lg-right">
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Intro />
          </Col>
          <Col lg={4}>
            <Portrait />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
