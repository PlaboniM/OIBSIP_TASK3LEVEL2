
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tasks = [];

app.post('/addTask', (req, res) => {
    const taskText = req.body.text;
    if (taskText) {
        tasks.push({ text: taskText, completed: false, dateAdded: new Date() });
        res.json({ message: 'Task added successfully.' });
    } else {
        res.status(400).json({ message: 'Task text is required.' });
    }
});

app.get('/getTasks', (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
