import React, { useState } from 'react'
import {
  EReCaptchaV2Size, EReCaptchaV2Theme, ReCaptchaV2
} from 'react-recaptcha-x'
import { Button, Form } from 'react-bootstrap'
import './style.scss'

const ContactForm = () => {
  const [recaptchaV2Token, setRecaptchaV2Token] = useState('')
  const [recaptchaV2Expired, setRecaptchaV2Expired] = useState(false)
  const [recaptchaV2Error, setRecaptchaV2Error] = useState(false)
  const [recaptchaV2Message, setRecaptchaV2Message] = useState(null)

  const handleRecaptchaV2 = token => {
    if (typeof token === 'string') {
      setRecaptchaV2Token(token)
      setRecaptchaV2Expired(false)
      setRecaptchaV2Error(false)
    } else if (typeof token === 'boolean' && !token) {
      setRecaptchaV2Expired(true)
      setRecaptchaV2Message('Your token has expired. Please check the reCAPTCHA box again.')
    } else if (token instanceof Error) {
      setRecaptchaV2Error(true)
      setRecaptchaV2Message('An error has occured. Please check your connection and try again.')
    }

    // temporary console output:
    console.log(`Your token is ${recaptchaV2Token}`)
    console.log(
      `Your token has ${(!recaptchaV2Expired) ? 'not ' : null}expired.`)
    console.log(
      `An error ${recaptchaV2Error ? 'occurred' : 'did not occur'}.`)
  }

  return (
    <Form>
      <Form.Group controlId="formContactMeName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Wonder Woman"
        />
      </Form.Group>
      <Form.Group controlId="formContactMeEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="wonder.woman@example.com"
        />
      </Form.Group>
      <Form.Control
        type="hidden"
        name="_cc"
        value="sonso@example.com"
      />
      <Form.Control
        type="hidden"
        name="_subject"
        value="Message from a Visitor to Your Dev Portfolio"
      />
      <Form.Group controlId="formContactMeMsg">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="10"
          placeholder="Talk to me!"
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
        controlId="formRecaptcha2"
        className="d-flex justify-content-center pt-4"
      >
        <ReCaptchaV2
          id="recaptcha"
          callback={handleRecaptchaV2}
          size={EReCaptchaV2Size.Normal}
          theme={EReCaptchaV2Theme.Light}
        />
        <Form.Text id="recaptcha-msg" muted>
          { recaptchaV2Message }
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
