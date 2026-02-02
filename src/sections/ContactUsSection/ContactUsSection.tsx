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
  </form>
)

export default ContactUsSection