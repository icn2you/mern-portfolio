import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { 
  Intro, NavBar, Portrait 
} from '../../components'
import './style.scss'

const Header = () => {
  return (
    <header className="skewed-container">
      <Container>
        <Row>
          <Col lg={4}>
            {/* Personal Logo */}
          </Col>
          <Col lg={6}>
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
