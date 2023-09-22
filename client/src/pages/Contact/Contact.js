import React, { useState } from 'react';
import './Contact.css';
import InstantChat from './InstantChat';
import ScheduleCall from './ScheduleCall';

const Contact = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState('call');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="contact-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'call' ? 'active-tab' : ''}
          onClick={() => handleTabClick('call')}
        >
          Schedule a Call
        </button>
        <button
          className={activeTab === 'chat' ? 'active-tab' : ''}
          onClick={() => handleTabClick('chat')}
        >
          Instant Chat
        </button>
      </div>
      <div className="tab-content">
        {/* Conditional rendering of components */}
        {activeTab === 'call' && <ScheduleCall />}
        {activeTab === 'chat' && <InstantChat />}
      </div>
    </div>
  );
};

export default Contact;
