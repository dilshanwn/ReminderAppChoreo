import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ReminderForm = ({ username, refreshReminders }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');

    const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(apiUrl+'/reminders', {
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
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </FormGroup>
            <FormGroup>
                <Label for="time">Time</Label>
                <Input type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </FormGroup>
            <FormGroup>
                <Label for="note">Note</Label>
                <Input type="text" name="note" id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter a note" required />
            </FormGroup>
            <Button type="submit" color="primary">Add Reminder</Button>
        </Form>
    );
};

export default ReminderForm;
