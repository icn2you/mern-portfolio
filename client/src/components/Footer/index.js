/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/26/2020
File:  index.js
Ver.:  0.1.0 20200826
       0.2.0 20200915

This script contains the Footer React component of my developer
portfolio.
***********************************************************************/
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Biosketch, Copyright, Quote, SocialMedia } from '../'
import './style.scss'

const socialMediaProfiles = [
  {
    label: 'Email',
    icon: 'envelope',
    link: 'mailto:christopher.zenner@differentdrummer.dev?subject=Message&nbsp;from&nbsp;a&nbsp;Visitor&nbsp;to&nbsp;Your&nbsp;Dev&nbsp;Portfolio'
  },
  {
    label: 'Résumé',
    icon: 'file-word',
    link: 'https://drive.google.com/file/d/16f1ij1jwi_jEuPEcyCHgfz3A2673DshP/view?usp=sharing'
  },
  {
    label: 'GitHub',
    icon: 'github',
    link: 'https://github.com/icn2you'
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin-in',
    link: 'https://www.linkedin.com/in/icn2you/'
  },
  {
    label: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/icn2you'
  }
]

const Footer = () => {
  return (
    <footer>
      <div id="about-me-container" className="skewed-container">
        <Container>
          <Row className="justify-content-center justify-content-lg-between">
            <Col lg={6} className="align-self-start">
              <Biosketch />
              <Quote />
            </Col>
            <Col lg={4} className="col-md-auto align-self-center">
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
            </Col>
          </Row>
        </Container>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
