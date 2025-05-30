import React from 'react';
import './Contact.css'; // Import the CSS file
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Address</h2>
                    <span>Kanke Road Near Gandhi Nagar Ranchi</span>
                    <span>Jharkhand - 834008 INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail / Phone Number</h2>
                    <span>
                      <a href="mailto:2025innostay@gmail.com" className="email-link">
                        2025innostay@gmail.com
                      </a>
                    </span>
                    <span>
                      <a href="tel:+9102641144" style={{ color: '#999999', textDecoration: 'none' }}>
                        9102641144
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Office Time</h2>
                    <span>Mon - Thu 9:00 am - 4:00 pm</span>
                    <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Subject" name="subject" />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Write Your Message" name="message"></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-page-map">
<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.1475931320338!2d85.32395039999999!3d23.419034999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e6d7b260c2cb%3A0x44d46bf4a37f5342!2sKanke%20Rd%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1747286329820!5m2!1sen!2sin"
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
