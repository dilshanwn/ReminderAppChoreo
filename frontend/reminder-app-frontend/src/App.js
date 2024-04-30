import React, { useState } from 'react';
import './App.css';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [username, setUsername] = useState('user1'); // Placeholder for user management
  const [activeTab, setActiveTab] = useState('add');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <h1>Reminders</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => handleTabClick('add')}
        >
          Add Reminder
        </button>
        <button
          className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => handleTabClick('list')}
        >
          View Reminders
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'add' && <ReminderForm username={username} />}
        {activeTab === 'list' && <ReminderList username={username} />}
      </div>
    </div>
  );
}

export default App;
