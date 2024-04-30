import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReminderList = ({ username }) => {
    const [reminders, setReminders] = useState([]);
    const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/";
    useEffect(() => {
        const fetchReminders = async () => {
            try {
                const response = await axios.get(apiUrl+`/reminders/${username}`);
                setReminders(response.data.reminders || []);
            } catch (error) {
                console.error('Failed to fetch reminders:', error);
            }
        };

        fetchReminders();
    }, [username]);

    return (
        <ul>
            {reminders.map((reminder) => (
                <li key={reminder.id}>
                    {reminder.date} at {reminder.time} - {reminder.note}
                </li>
            ))}
        </ul>
    );
};

export default ReminderList;
