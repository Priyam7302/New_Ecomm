const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Locate Us</h2>
      <p>Visit our store or reach out anytime.</p>

      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
