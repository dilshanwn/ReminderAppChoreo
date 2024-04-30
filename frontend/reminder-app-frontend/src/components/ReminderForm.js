import React, { useState } from 'react';
import axios from 'axios';

const ReminderForm = ({ username, refreshReminders }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/reminders', {
                username,
                date,
                time,
                note
            });
            setDate('');
            setTime('');
            setNote('');
            refreshReminders();
        } catch (error) {
            console.error('Failed to add reminder:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter a note" required />
            <button type="submit">Add Reminder</button>
        </form>
    );
};

export default ReminderForm;
