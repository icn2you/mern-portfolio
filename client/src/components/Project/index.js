import React from 'react'
import { Col } from 'react-bootstrap'
import './style.scss'

const Project = ({ id, title, url, repo, image, lang, tech }) => {
  const displayAsCommaDelimitedList = (arr) => {
    return arr.map((item, i) => {
      return `${item}${
        (arr.length > 1 && i < arr.length - 1) 
        ? ', ' 
        : ''}`
    })
  }

  return (
    <Col lg={3} className="text-center">
      <figure id={id} className="photo-box">
        <img src={image} alt="MacBook Pro" className="img-fluid" />
        <a href={url} rel="noopener noreferrer" target="_blank">
          <img src={image} alt="MacBook Pro" className="img-fluid top-img" />
        </a>
        <figcaption className="text-center">{title}</figcaption>
      </figure>
      <div className="lang">
        { lang ? displayAsCommaDelimitedList(lang) : ' ' }
      </div>
      <div className="tech">
        { tech ? displayAsCommaDelimitedList(tech) : ' ' }
      </div>
      <div className="repo">
        <a href={repo} target="blank">{repo.slice(19)}</a>
      </div>
    </Col>
  )
}

export default Project
