import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Copyright, SocialMedia } from '..'
import socialMediaProfiles from '../../data/social-media.json'
import './style.scss'

const SiteFooter = () => {
  return (
    <footer className="site text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} className="col-auto">
            <div className="d-flex flex-nowrap
              flex-column align-items-start
              flex-lg-row align-items-lg-center justify-content-lg-around">
              { socialMediaProfiles
                ? socialMediaProfiles.map((profile, i) =>
                  <SocialMedia
                    key={i}
                    label={profile.label}
                    icon={profile.icon}
                    link={profile.link}
                  />
                )
                : ''
              }
            </div>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </footer>
  )
}

export default SiteFooter
