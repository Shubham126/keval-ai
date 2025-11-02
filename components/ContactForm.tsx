'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Oops! Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="col-lg-12 mb-4">
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="col-lg-12">
            {submitStatus.type && (
              <div
                className={`alert ${
                  submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'
                } mb-4`}
              >
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              className="theme-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="icon-1"></span>
                  Sending...
                  <span className="icon-2"></span>
                </>
              ) : (
                <>
                  <span className="icon-1"></span>
                  Send Message
                  <span className="icon-2"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
