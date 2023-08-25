import React, { useState, useEffect } from 'react';

function ContactList({ onSelectContact }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <button onClick={() => onSelectContact(contact)}>Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
