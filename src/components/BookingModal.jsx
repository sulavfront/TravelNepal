import { useEffect, useState } from "react";

function BookingModal({ destination, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {!submitted ? (
          <>
            <h2>Book {destination.name}</h2>
            <p className="muted">
              Demo booking form. No real payment is processed.
            </p>

            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                Full name
                <input type="text" required placeholder="Your name" />
              </label>

              <label>
                Email
                <input type="email" required placeholder="you@example.com" />
              </label>

              <div className="form-row">
                <label>
                  Travel date
                  <input type="date" required />
                </label>

                <label>
                  Travelers
                  <input
                    type="number"
                    min="1"
                    max="20"
                    defaultValue="2"
                    required
                  />
                </label>
              </div>

              <label>
                Message
                <textarea rows="4" placeholder="Anything we should know?"></textarea>
              </label>

              <button className="primary-button full" type="submit">
                Send Booking Request
              </button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2>Booking request received</h2>
            <p>
              Your demo booking request for {destination.name} has been
              submitted successfully.
            </p>
            <button className="primary-button" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;