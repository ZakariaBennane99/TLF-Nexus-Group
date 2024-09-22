"use client";

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@tlfnexusgroup.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success === 'true') {
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message. We will get back to you soon!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send the message, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="contact-us">
        <h1 className='contact-us-title'>CONTACT US</h1>
        <div className="splitter-container">
          <img src="/splitter.svg" />
        </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Business St, Baton Rouge, LA 12345</p>
          <p><strong>Phone:</strong> (443) 300-6105</p>
          <p><strong>Email:</strong> info@tlfnexusgroup.com</p>
          <div className="working-hours">
            <h2>Working Hours</h2>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223849.83765856033!2d-91.26414065056582!3d30.45288769546273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86243867325f74cb%3A0x2123f1db91579a1d!2sBaton%20Rouge%2C%20LA!5e0!3m2!1sen!2sus!4v1695326391290!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
}