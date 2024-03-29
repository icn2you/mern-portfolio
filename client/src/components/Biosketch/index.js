/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/12/2020
File:  index.js
Ver.:  0.1.0 20200912

This script contains the Biosketch React component of my developer
portfolio.
***********************************************************************/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

const Biosketch = () => {
  return (
    <div>
      <h2 id="about">Christopher Zenner</h2>
      <p className="text-justify">I am a full stack web developer (FSWD) with proficiencies in HTML, CSS, and JavaScript. I have experience developing <a href="https://www.educative.io/edpresso/what-is-mern-stack" target="_blank" rel="noopener noreferrer">MERN</a> apps. (You're looking at an example of one now! <FontAwesomeIcon icon={['fab', 'react']} />) I have also worked with Firebase and MySQL. An avid learner, I am always eager to add new technologies to my skillset. Being a developer is my calling <em>and</em> my passion.</p>
      <p className="text-justify">I love a steamy <a href="https://vitaltealeaf.net/collections/oolong-teas/products/iron-goddess-ginseng-oolong" target="_blank" rel="noopener noreferrer">cup of tea</a> and an enlightening book. <a href="https://enneagraminstitute.com/type-1" target="_blank" rel="noopener noreferrer">Principle-driven</a>, I seek to be a better me today than I was yesterday. Meditation is key. Writing code is my bliss. (My tool of choice is a <a href="https://apple.com/macbook-pro-16" target="_blank" rel="noopener noreferrer">MBP 16</a>.) I look forward to the day when I can discuss my existential angst with <a href="https://www.apple.com/siri/" target="_blank" rel="noopener noreferrer">Siri</a>. Oh, and I’m <a href="https://youtu.be/GpBFOJ3R0M4" target="_blank" rel="noopener noreferrer">only happy when it rains</a>.</p>
    </div>
  )
}

export default Biosketch
