import { useState } from "react";
import emailjs from "emailjs-com";

import { EMAILJS_SERVICE_KEY, EMAILJS_USER_KEY } from "../utils/urls";
import styles from "../styles/Contact.module.css";
import Meta from "../partials/seo-meta";
import SocialIcons from "../components/SocialIcons";
import Circle from "../components/SVGs/Circle";

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
      <Meta
        title="Contact - A Wild Christian"
        desc="Have a question? Send Christian an email for inquiries about print specials or collaborations."
        canonical="https://awildchristian.com/contact"
      />

      <form className={styles.form} onSubmit={handleSubmit} method="POST">
        <div className={styles.welcome_text}>
          <h1>Let's chat!</h1>
          <h4>I like to create things with fun, open-minded people. Feel free to say hello!</h4>
        </div>
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
          <textarea rows="4" value={formData.message} onChange={onMessageChange}></textarea>
        </div>

        <div className={styles.form_group}>
          <button type="submit" className={styles.button}>
            SEND
          </button>
        </div>
      </form>

      {sentSuccessful && <p className={styles.success_text}>MESSAGE SENT SUCCESSFULLY!</p>}

      <div className={styles.social_icons}>
        <SocialIcons />
      </div>

      <Circle styles={styles.circle} />
    </>
  );
}
