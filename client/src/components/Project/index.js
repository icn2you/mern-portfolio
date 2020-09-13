import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './style.scss'

// Image assets must be required in order to render properly.
require('../../assets/images/laptop-grayscale.png')

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
    <div className="text-center">
      <a href={url} rel="noopener noreferrer" target="_blank">
        <figure id={id} className="photo-box">
          <img src={image} alt="MacBook Pro" className="img-fluid" />
          <img 
            src={image} 
            alt="MacBook Pro" 
            className="img-fluid top-img" 
          />
          <figcaption className="text-center">{title}</figcaption>
        </figure>
      </a>
      <div className="lang">
        { lang ? displayAsCommaDelimitedList(lang) : ' ' }
      </div>
      <div className="tech">
        { tech ? displayAsCommaDelimitedList(tech) : ' ' }
      </div>
      <div className="repo">
        { (repo && repo !== '#0')
          ? <a href={repo} target="blank">
            <FontAwesomeIcon 
              icon={faGithubAlt} 
              size="lg"
            /> {repo.slice(19)}
          </a>
          : ' '
        }
      </div>
    </div>
  )
}

export default Project
