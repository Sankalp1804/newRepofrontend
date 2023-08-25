import React from 'react';

function ContactDetails({ contact }) {
  if (!contact) {
    return null;
  }

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <h4>Phone Numbers:</h4>
      <ul>
        {contact.phoneNumbers.map(phoneNumber => (
          <li key={phoneNumber.id}>{phoneNumber.phone_number}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactDetails;
