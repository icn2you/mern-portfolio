/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/10/2020
File:  index.js
Ver.:  0.1.0 20200826 - basic form
       0.2.0 20200922 - reCAPTCHA v2
       0.3.0 20200929 - form handling
       0.4.0 20200930 - gatekeeping
       0.5.0 20201002 - message sanitization
       0.6.0 20201003 - reCAPTCHA v2 reset
       0.7.0 20201006 - form validation

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

const statusMsg = {
  bot: 'Silly, bot! Messages are for humans.',
  human: 'You appear to be human! You may proceed.',
  genErr: 'An error occurred. Please attempt to send your message again.',
  connErr: 'An error has occurred. Please check your connection and try again.',
  formErr: 'Your message cannot be sent. Please resolve the errors above and attempt to send your message again.',
  networkErr: 'A network error occurred. Please attempt to verify again.',
  errAdd: 'If the problem persists, use the email link below to contact me.',
  contactMade: 'Your message was successfully sent! I\'ll be in touch soon.',
  tokenExpired: 'Your verification has expired. Please check the reCAPTCHA checkbox again.',
  tokenNeeded: 'Your message cannot be sent. Please confirm you are human using the reCAPTCHA widget above!'
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initFormData)
  const [formValidated, setFormValidated] = useState(false)
  const [recaptchaV2Token, setRecaptchaV2Token] = useState(undefined)
  const [recaptchaV2Exp, setRecaptchaV2Exp] = useState(false)
  const [recaptchaV2Err, setRecaptchaV2Err] = useState(false)
  const [recaptchaV2Msg, setRecaptchaV2Msg] = useState('')
  const [recaptchaV2MsgAdd, setRecaptchaV2MsgAdd] = useState(false)

  useEffect(() => {
    if (typeof recaptchaV2Token === 'string') {
      // ASSERT: We have a token to send to Google's SiteVerify.
      API.isVisitorHuman(recaptchaV2Token)
        .then((res) => {
          if (res === undefined) {
            // ASSERT: API returned undefined, which means fetch failed.
            window.grecaptcha.reset()
            setRecaptchaV2Token(undefined)
            setRecaptchaV2Msg(statusMsg.networkErr)
            setRecaptchaV2MsgAdd(true)
          } else if (!res.success) {
            // ASSERT: User appears to be non-human.
            setRecaptchaV2Token(undefined)
            setRecaptchaV2Err(true)
            setRecaptchaV2Msg(statusMsg.bot)
            setRecaptchaV2MsgAdd(false)
          } else {
            // ASSERT: User appears to be human.
            setRecaptchaV2Msg(statusMsg.human)
            setRecaptchaV2MsgAdd(false)
          }
        })
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

    if (typeof recaptchaV2Token !== 'string') {
      setRecaptchaV2Msg(statusMsg.tokenNeeded)
      setRecaptchaV2MsgAdd(false)
      return
    }

    const form = ev.currentTarget

    if (form.checkValidity() === false) {
      ev.stopPropagation()
      setRecaptchaV2Msg(statusMsg.formErr)
      setRecaptchaV2MsgAdd(false)
    } else {
      // ASSERT: Form input is valid.
      handleSendMsg()
    }

    setFormValidated(true)
  }

  const handleSendMsg = () => {
    if (!recaptchaV2Exp && !recaptchaV2Err) {
      // Strip any HTML tags from visitor's message.
      formData.message =
        stripHtml(formData.message, {
          stripTogetherWithTheirContents: ['script']
        }).result

      // Persist vesitor's message in the database.
      API.saveVisitorMsg(formData)
        .catch(err => console.log(err.stack))

      // Send visitor's message to API for routing.
      API.sendVisitorMsg(formData)
        .then(({ status }) => {
          if (typeof status === 'boolean' && status) {
            // Clear form input.
            setFormData(initFormData)

            /*
              Reset reCAPTCHA v2 state.

              NOTE: Invoking reset() on the window object's grecaptcha element seems to be the only way to reset the reCAPTCHA v2 element successfully. (See https://stackoverflow.com/questions/46514194/how-to-reset-google-recaptcha-with-react-google-recaptcha/47128103#47128103.) However, I'm not sure this is the best/most elegant solution. I've tried grabbing a ref to the ReCaptchaV2 component with useRef() to no avail. This may be a limitation of the react-recaptcha-x package. (20201003)
            */
            setFormValidated(false)
            window.grecaptcha.reset()
            setRecaptchaV2Token(undefined)
            setRecaptchaV2Msg(statusMsg.contactMade)
            setRecaptchaV2MsgAdd(false)
          } else {
            setRecaptchaV2Msg(statusMsg.genErr)
            setRecaptchaV2MsgAdd(true)
          }
        })
        .catch(err => console.error(err.stack))
    }
  }

  const handleRecaptchaV2Verification = token => {
    if (typeof token === 'string') {
      setRecaptchaV2Token(token)
      setRecaptchaV2Exp(false)
      setRecaptchaV2Err(false)
    } else if (typeof token === 'boolean' && !token) {
      setRecaptchaV2Exp(true)
      setRecaptchaV2Msg(statusMsg.tokenExpired)
      setRecaptchaV2MsgAdd(false)
    } else if (token instanceof Error) {
      setRecaptchaV2Err(true)
      setRecaptchaV2Msg(statusMsg.connErr)
      setRecaptchaV2MsgAdd(true)
    }
  }

  return (
    <Form noValidate
      validated={formValidated}
      onSubmit={handleFormSubmit}
    >
      <Form.Group controlId="formContactMeName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={formData.name}
          placeholder="Wonder Woman"
          onChange={handleFormInputChg}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formContactMeEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="wonder.woman@example.com"
          onChange={handleFormInputChg}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
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
          required
          as="textarea"
          rows="10"
          name="message"
          value={formData.message}
          placeholder="Talk to me—in plain text, please!"
          onChange={handleFormInputChg}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
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
          <div>{ recaptchaV2Msg }</div>
          { recaptchaV2MsgAdd
            ? <div>{ statusMsg.errAdd }</div>
            : ''
          }
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
