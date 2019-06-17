import React, { useState } from 'react';
import axios from 'axios';

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
    <form
      style={{ width: '40%', margin: '1em auto' }}
      action="mailto:chiptus@gmail.com"
      method="POST"
      id="submit"
      onSubmit={submit}>
      <header>
        <h3>Submit a campaign</h3>
        <p>If there is a link to campaign we're missing, please submit it here </p>
      </header>
      <div className="form-group">
        <label htmlFor="formBasicEmail">Your Email address</label>
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          id="formBasicEmail"
          onChange={formSetter(setEmail)}
        />
        <div className="form-text text-muted">We'll never share your email with anyone else.</div>
      </div>

      <div className="form-group">
        <label htmlFor="formBasicCampaignUrl">Campaign URL</label>
        <input
          id="formBasicCampaignUrl"
          className="form-control"
          name="url"
          placeholder="Enter url"
          value={url}
          onChange={formSetter(setUrl)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formBasicTitle">Title</label>
        <input
          id="formBasicTitle"
          className="form-control"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={formSetter(setTitle)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formBasicDescription">Description</label>
        <input
          id="formBasicDescription"
          className="form-control"
          name="description"
          as="textarea"
          placeholder=""
          value={description}
          onChange={formSetter(setDescription)}
        />
      </div>

      <button variant="primary" type="submit">
        Submit
      </button>
    </form>
  );
}
