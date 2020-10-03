/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/10/2020
File:  index.js
Ver.:  0.1.0 20200826 - basic form
       0.2.0 20200922 - reCAPTCHA v2
       0.3.0 20200929 - form handling
       0.4.0 20200930 - gatekeeping
       0.5.0 20201002 - message sanitization

This script contains the ContactForm React component of my developer portfolio.
***********************************************************************/
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  EReCaptchaV2Size, EReCaptchaV2Theme, ReCaptchaV2
} from 'react-recaptcha-x'
import stripHtml from 'string-strip-html'
import API from '../../utils/api'
import './style.scss'

const CC_EMAIL_ADDR = process.env.REACT_APP_CC_EMAIL_ADDRESS

const initFormData = Object.freeze({
  name: '',
  email: '',
  _cc: CC_EMAIL_ADDR,
  _subject: 'Message from a Visitor to Your Dev Portfolio',
  message: ''
})

const ContactForm = () => {
  const [formData, setFormData] = useState(initFormData)
  const [recaptchaV2Token, setRecaptchaV2Token] = useState('')
  const [recaptchaV2Exp, setRecaptchaV2Exp] = useState(false)
  const [recaptchaV2Err, setRecaptchaV2Err] = useState(false)
  const [recaptchaV2Msg, setRecaptchaV2Msg] = useState(null)

  useEffect(() => {
    if (recaptchaV2Token !== '') {
      API.isVisitorHuman(recaptchaV2Token)
        .then(res => console.log(res))
        .catch(err => console.error(err.stack))
    }
  }, [recaptchaV2Token])

  const handleFormInputChg = ev => {
    const { name, value } = ev.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = ev => {
    ev.preventDefault()

    if (typeof recaptchaV2Token === 'string' &&
      recaptchaV2Token.length > 0 &&
      !recaptchaV2Err &&
      !recaptchaV2Exp) {
      // Clear any error message.
      setRecaptchaV2Msg('')

      // Strip any HTML tags from visitor's message.
      formData.message =
        stripHtml(formData.message, {
          stripTogetherWithTheirContents: ['script']
        }).result

      // Send visitor's message to API for routing.
      API.sendVisitorMsg(formData)
        .then(res => console.log(res))
        .catch(err => console.error(err.stack))

      // Clear form input.
      setFormData(initFormData)
    } else {
      setRecaptchaV2Msg('Your message cannot be sent. Please confirm you are human using the reCAPTCHA widget above!')
    }
  }

  const handleRecaptchaV2Verification = token => {
    if (typeof token === 'string') {
      setRecaptchaV2Token(token)
      setRecaptchaV2Exp(false)
      setRecaptchaV2Err(false)
    } else if (typeof token === 'boolean' && !token) {
      setRecaptchaV2Exp(true)
      setRecaptchaV2Msg('Your verification has expired. Please check the reCAPTCHA checkbox again.')
    } else if (token instanceof Error) {
      setRecaptchaV2Err(true)
      setRecaptchaV2Msg('An error has occurred. Please check your connection and try again.')
    }
  }

  return (
    <Form noValidate onSubmit={handleFormSubmit}>
      <Form.Group controlId="formContactMeName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          placeholder="Wonder Woman"
          onChange={handleFormInputChg}
        />
      </Form.Group>
      <Form.Group controlId="formContactMeEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          placeholder="wonder.woman@example.com"
          onChange={handleFormInputChg}
        />
      </Form.Group>
      <Form.Control
        type="hidden"
        name="_cc"
        value={formData._cc}
      />
      <Form.Control
        type="hidden"
        name="_subject"
        value={formData._subject}
      />
      <Form.Group controlId="formContactMeMsg">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="10"
          name="message"
          value={formData.message}
          placeholder="Talk to me—in plain text, please!"
          onChange={handleFormInputChg}
        />
      </Form.Group>
      <Form.Group
        controlId="formContactMeBtns"
        className="d-flex justify-content-center"
      >
        <Button
          as="input"
          type="submit"
          variant="outline-submit"
          value="Send"
        />
        <Button
          as="input"
          type="reset"
          variant="outline-reset"
          value="Reset"
        />
      </Form.Group>
      <Form.Group
        controlId="formRecaptchaV2"
        className="d-flex justify-content-center pt-4"
      >
        <ReCaptchaV2
          id="recaptcha"
          callback={handleRecaptchaV2Verification}
          size={EReCaptchaV2Size.Normal}
          theme={EReCaptchaV2Theme.Light}
        />
      </Form.Group>
      <Form.Group
        controlId="formRecaptchaV2Msg"
        className="d-flex justify-content-center"
      >
        <Form.Text id="recaptcha-v2-msg" muted>
          { recaptchaV2Msg }
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
