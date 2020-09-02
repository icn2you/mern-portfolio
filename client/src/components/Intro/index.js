/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/28/2020
File:  index.js
Ver.:  0.1.0 20200828

This script contains the Intro React component of my developer 
portfolio.
***********************************************************************/
import React from 'react'
import './style.scss'

const Intro = () => {
  return (
    <>
      <div className="name">
        <span className="hi">Hi.</span> My name is <span className="chris">Chris.</span>
      </div>
      <div className="pers-stmt">
        I'm a <span className="title">&#60;title&#62;Web Developer&#60;&#47;title&#62;,</span>
      </div>
      <div className="pers-stmt">
        passionate about making the world
      </div>
      <div className="pers-stmt">
        better through code.
      </div>
    </>
  )
}

export default Intro
