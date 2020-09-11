import React from 'react'
import { Button, Form } from 'react-bootstrap'

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
        <Form.Control as="textarea" rows="10" />
      </Form.Group>
      <Form.Group controlId="formContactMeBtns">
        <Button type="submit" className="btn btn-outline-submit">
          Send
        </Button>
        <Button type="reset" className="btn btn-outline-reset">
          Reset
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
