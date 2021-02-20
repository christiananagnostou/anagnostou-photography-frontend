import Head from "next/head";
import { useState } from "react";
import emailjs from "emailjs-com";

import { EMAILJS_SERVICE_KEY, EMAILJS_USER_KEY } from "../utils/urls";
import styles from "../styles/Contact_Page.module.css";

export default function contact() {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [sentSuccessful, setsentSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Christian",
      subject: formData.subject,
      message: formData.message,
      site: "photography",
    };

    emailjs.send(EMAILJS_SERVICE_KEY, "contact_form", templateParams, EMAILJS_USER_KEY).then(
      (result) => {
        setFormData(initialFormState);
        setsentSuccessful(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const onNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onSubjectChange = (e) => {
    setFormData({ ...formData, subject: e.target.value });
  };

  const onMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Contact - Anagnostou Photography</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      {sentSuccessful && (
        <p className={styles.success_text}>Message sent. You'll hear from me soon!</p>
      )}
      <form id="contact-form" onSubmit={handleSubmit} method="POST" className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="name">YOUR NAME</label>
          <input type="text" value={formData.name} onChange={onNameChange} required />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="inputEmail">EMAIL ADDRESS</label>
          <input
            type="email"
            aria-describedby="email"
            value={formData.email}
            onChange={onEmailChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="subject">SUBJECT</label>
          <input type="text" value={formData.subject} onChange={onSubjectChange} />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            rows="6"
            cols="50"
            value={formData.message}
            onChange={onMessageChange}
          ></textarea>
        </div>

        <div className={styles.form_group}>
          <button type="submit" className={styles.form_btn}>
            SEND
          </button>
        </div>
      </form>
    </>
  );
}
