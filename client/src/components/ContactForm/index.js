import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './style.scss'

const ContactForm = () => {
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
    </Form>
  )
}

export default ContactForm
