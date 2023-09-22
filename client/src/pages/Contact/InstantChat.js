import React, { useState } from 'react';
import './InstantChat.css'; // Import your CSS for styling

const InstantChat = () => {
  // State to manage chat messages
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a chat message
  const sendMessage = () => {
    // Implement the logic to send a message (backend).
    // Update the chatMessages state with the sent message.
    // You can use a backend service or library like Socket.io or Firebase for real-time chat.
    // For this example, we'll simulate adding a message locally.
    if (newMessage.trim() !== '') {
      setChatMessages([...chatMessages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="instant-chat-container">
      <h2>Instant Chat</h2>
      <div className="chat-messages">
        {chatMessages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default InstantChat;

