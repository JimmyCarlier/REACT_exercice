import { useState } from "react";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const contactFormResult = (event) => {
    event.preventDefault();

    setContactData({
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      message: event.target.message.value,
      email: event.target.email.value,
    });
  };
  return (
    <>
      <form onSubmit={contactFormResult}>
        <label htmlFor="firstName">Prénom:</label>
        <input type="text" name="firstName"></input>

        <label htmlFor="lastName">Nom:</label>
        <input type="text" name="lastName"></input>

        <label htmlFor="message">Message :</label>
        <textarea name="message"></textarea>

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email"></input>

        <button>Envoyer</button>
      </form>
      <h2>
        Merci pour votre message {contactData.firstname + " " + contactData.lastname}
      </h2>
    </>
  );
};

export default ContactForm;