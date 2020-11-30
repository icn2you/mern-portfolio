import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Copyright, SocialMedia } from '..'
import socialMediaProfiles from '../../data/social-media.json'
import './style.scss'

const SiteFooter = () => {
  return (
    <footer className="site text-center">
      <Container>
        <Row className="">
          <Col lg={12} className="col-md-auto">
            <div className="d-flex flex-wrap
                justify-content-sm-center justify-content-xl-between">
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
