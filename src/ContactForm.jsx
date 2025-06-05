import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/portfolio/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <div className="contact-layout">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>
          If you're working on a project, that might interest me,<br></br> feel
          free to drop me a message using this form.<br></br>I'll respond as
          soon as I can - or better yet, give me a call!
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:Tanel.Pauls@voco.ee">Tanel.Pauls@voco.ee</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+37251946343">+372 5194 6343</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
