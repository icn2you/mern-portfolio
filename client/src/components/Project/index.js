import React from 'react'
import { Col } from 'react-bootstrap'
import './style.scss'

const Project = ({ title, url, repo, image, langs, tech }) => {
  const displayAsCommaDelimitedList = (arr) => {
    return arr.map((item, i) => {
      return `${item}${
        (arr.length > 1 && i < arr.length - 1) 
        ? ', ' 
        : ''}`
    })
  }

  return (
    <Col lg={3}>
      <figure>
        <img src={image} alt="MacBook Pro" class="img-fluid" />
        <a href={url} rel="noopener noreferrer" target="_blank">
          <img src={image} alt="MacBook Pro" class="img-fluid" />
        </a>
        <figcaption class="text-center">{title}</figcaption>
      </figure>
      <div>
        { langs ? displayAsCommaDelimitedList(langs) : ' ' }
      </div>
      <div>
        { tech ? displayAsCommaDelimitedList(tech) : ' ' }
      </div>
      <div>
        <a href={repo} target="blank">{repo.slice(19)}</a>
      </div>
    </Col>
  )
}

export default Project
