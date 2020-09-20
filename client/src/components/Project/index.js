/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/05/2020
File:  index.js
Ver.:  0.1.0 20200905

This script contains the Project React component of my developer portfolio.
***********************************************************************/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

// Image assets must be required in order to render properly.
require('../../assets/images/0.5x/laptop-grayscale-0.5x.png')
require('../../assets/images/0.5x/word-guess-color-0.5x.png')
require('../../assets/images/0.5x/word-guess-grayscale-0.5x.png')

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
              icon={['fab', 'github-alt']} 
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
