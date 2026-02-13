import './ContactUsSection.css'

const ContactUsSection = () => (
  <form id="contact_us_section">
    <p>Name</p>
    <input type="text" />

    <p>Email</p>
    <input type="email" />

    <p>Message</p>
    <textarea></textarea>

    <button type="submit">Send</button>

    <br />
    <p>Stories in Between</p>
    <p>Registered Non-profit: K2026068265</p>
  </form>
)

export default ContactUsSection