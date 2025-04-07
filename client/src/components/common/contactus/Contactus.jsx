import React, { useState } from 'react';
import './Contactus.scss';
import { enquiry } from '../../../assets';

const Contactussection = () => {
  const [form, setForm] = useState({
    form_name: '',
    form_phone: '',
    form_email: '',
    form_subject: '',
    form_message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const payload = {
      name: form.form_name,
      phone: form.form_phone,
      email: form.form_email,
      subject: form.form_subject,
      message: form.form_message
    };

    try {
      const response = await fetch(/* 'http://localhost:5000/api/contact' */ 'https://starliteglobal.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Message sent successfully!');
        setForm({
          form_name: '',
          form_phone: '',
          form_email: '',
          form_subject: '',
          form_message: ''
        });
      } else {
        alert(`❌ Failed to send: ${data.message}`);
      }
    } catch (err) {
      alert('❌ Something went wrong!');
      console.error(err);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">
          Leave A <span className="highlight">Message</span>
        </h1>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="eg. Brad William"
                    name="form_name"
                    value={form.form_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="eg. +65 12345678"
                    name="form_phone"
                    value={form.form_phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="eg. bradwilliam@email.com"
                    name="form_email"
                    value={form.form_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="eg. Looking Ocean Shipment"
                    name="form_subject"
                    value={form.form_subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    name="form_message"
                    value={form.form_message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-image">
            <img src={enquiry} alt="enquiry form" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactussection;
