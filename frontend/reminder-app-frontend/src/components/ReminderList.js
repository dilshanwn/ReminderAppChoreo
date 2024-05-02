import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

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
        <Card>
            <Card.Header>Reminders</Card.Header>
            <ListGroup variant="flush">
                {reminders.map((reminder) => (
                    <ListGroup.Item key={reminder.id}>
                        {reminder.date} at {reminder.time} - {reminder.note}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default ReminderList;
