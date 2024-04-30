const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let reminders = {};

app.post('/reminders', (req, res) => {
    const { username, date, time, note } = req.body;
    if (!reminders[username]) {
        reminders[username] = [];
    }
    const id = uuidv4();
    reminders[username].push({ id, date, time, note });
    res.status(201).json({ message: 'Reminder added successfully', id: id });
});

app.get('/reminders/:username', (req, res) => {
    const { username } = req.params;
    if (reminders[username]) {
        res.status(200).json({ username: username, reminders: reminders[username] });
    } else {
        res.status(404).json({ message: 'No reminders found' });
    }
});

app.put('/reminders/:username/:id', (req, res) => {
    const { username, id } = req.params;
    const { date, time, note } = req.body;
    const userReminders = reminders[username];
    if (userReminders) {
        const reminder = userReminders.find(rem => rem.id === id);
        if (reminder) {
            reminder.date = date;
            reminder.time = time;
            reminder.note = note;
            res.status(200).json({ message: 'Reminder updated successfully' });
        } else {
            res.status(404).json({ message: 'Reminder not found' });
        }
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/reminders/:username/:id', (req, res) => {
    const { username, id } = req.params;
    let userReminders = reminders[username];
    if (userReminders) {
        const index = userReminders.findIndex(rem => rem.id === id);
        if (index > -1) {
            userReminders.splice(index, 1);
            reminders[username] = userReminders;
            res.status(200).json({ message: 'Reminder deleted successfully' });
        } else {
            res.status(404).json({ message: 'Reminder not found' });
        }
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Reminder app listening at http://localhost:${port}`);
});
