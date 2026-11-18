import { useState } from "react";
import PageLayout from "../components/PageLayout.jsx";

export default function ContactMe() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <PageLayout>
      <h2 className="title">
        Contact <span className="accent">Me</span>
      </h2>
      <p className="muted">Let's get in touch!</p>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Surname
          <input name="surname" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" />
        </label>
        <label className="form__full">
          Message
          <input name="message" required />
        </label>
        <label className="form__check form__full">
          <input type="checkbox" required /> I agree to be contacted via email or phone
        </label>
        <button className="btn form__full" type="submit">
          Submit
        </button>
        {sent && <p className="form__ok form__full">Thank you! Your message has been sent.</p>}
      </form>
    </PageLayout>
  );
}
