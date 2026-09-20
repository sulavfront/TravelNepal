import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="page-hero">
        <div>
          <span className="eyebrow">
            GET IN TOUCH
          </span>

          <h1>Contact Us</h1>

          <p>
            Have a question about a destination or tour?
            Send us a message.
          </p>
        </div>
      </section>

      <section className="section contact-layout">

        <div className="contact-info">

          <span className="eyebrow">
            CONTACT
          </span>

          <h2>
            Let's talk about your next trip.
          </h2>

          <p>
            Whether you need help choosing a destination
            or want more information about a tour, feel
            free to contact us.
          </p>

          <div className="contact-item">
            <strong>Location</strong>
            <span>Kathmandu, Nepal</span>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <span>
              hellotravelnepal@gmail.com
            </span>
          </div>

          <div className="contact-item">
            <strong>Phone</strong>
            <span>
              +977 9800000000
            </span>
          </div>

        </div>

        <div className="contact-form-card">

          {!submitted ? (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <label>
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                 
                  required
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="primary-button"
              >
                Send Message
              </button>

            </form>
          ) : (
            <div className="success-state">

              <div className="success-icon">
                ✓
              </div>

              <h2>
                Message sent
              </h2>

              <p>
                Thanks for contacting TravelNepal.
                We will get back to you soon.
              </p>

              <button
                className="primary-button"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>

            </div>
          )}

        </div>

      </section>
    </main>
  );
}

export default Contact;