import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export function NewCampaignForm() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  function submit(event) {
    event.preventDefault();
    axios.post(
      'https://script.google.com/macros/s/AKfycbx5G9D5MJNhqQXhwqeAQN1nrgbGrvDmkq13EjLYLkl8-8odnKJc/exec',
      {
        url,
        email,
        title,
        description,
      },
      {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }
    );
  }

  function formSetter(setter) {
    return function({ target: { value } }) {
      setter(value);
    };
  }
  return (
    <Form
      style={{ width: '40%', margin: '1em auto' }}
      action="mailto:chiptus@gmail.com"
      method="POST"
      onSubmit={submit}>
      <header>
        <h3>Submit a campaign</h3>
        <p>If there is a link to campaign we're missing, please submit it here </p>
      </header>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={formSetter(setEmail)}
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicCampaignUrl">
        <Form.Label>Campaign URL</Form.Label>
        <Form.Control name="url" placeholder="Enter url" value={url} onChange={formSetter(setUrl)} />
      </Form.Group>

      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" placeholder="Enter title" value={title} onChange={formSetter(setTitle)} />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          placeholder=""
          value={description}
          onChange={formSetter(setDescription)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
