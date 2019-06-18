import React, { useState } from 'react';
import axios from 'axios';
import styles from './new-campaign-form.module.css';
import { NotebookTextarea } from './NotebookTextarea';
import { Button } from './button';

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
    <form className={styles.form} action="mailto:chiptus@gmail.com" method="POST" id="submit" onSubmit={submit}>
      <header className={styles.header}>
        <h3 className={styles.title}>+ Submit a campaign</h3>
        <p className={styles.subtitle}>If there is a link to campaign we're missing, please submit it here </p>
      </header>
      <div className={styles.formGroup}>
        <label htmlFor="formBasicEmail">Your Email Address</label>
        <input
          className={styles.formControl}
          name="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          id="formBasicEmail"
          onChange={formSetter(setEmail)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="formBasicCampaignUrl">Campaign URL</label>
        <input
          id="formBasicCampaignUrl"
          className={styles.formControl}
          name="url"
          placeholder="www.campaign-url.com"
          value={url}
          onChange={formSetter(setUrl)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="formBasicTitle">Title</label>
        <input
          id="formBasicTitle"
          className={styles.formControl}
          name="title"
          placeholder="help the moshav"
          value={title}
          onChange={formSetter(setTitle)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="formBasicDescription">Description</label>
        <NotebookTextarea
          id="formBasicDescription"
          className={styles.formControl}
          name="description"
          placeholder=""
          value={description}
          onChange={formSetter(setDescription)}
        />
      </div>

      <Button className={styles.submitButton} type="submit">
        Submit
      </Button>
    </form>
  );
}
