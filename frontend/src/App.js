// import './App.css';

// function App() {
//   return (
//    <h1>Hello React App</h1>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectContact = async contact => {
    try {
      const response = await fetch(`/api/contacts/${contact.id}`);
      const data = await response.json();
      setSelectedContact(data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  };

  return (
    <div className="App">
      <h1>Contact Management System</h1>
      <ContactList onSelectContact={handleSelectContact} />
      <ContactDetails contact={selectedContact} />
    </div>
  );
}

export default App;

