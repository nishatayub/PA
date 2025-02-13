const express = require('express');

const app = express();
const port = 3000;

app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name;
    if (!userName) {
        return res.status(400).json({ error: 'Name query parameter is required' });
    }

    const welcomeMessage = `Hello, ${userName}! Welcome to our assistant app!`;
    const dayOfWeek = new Date().getDay();
    let dayMessage;

    switch (dayOfWeek) {
        case 1:
            dayMessage = 'Happy Monday! Start your week with energy!';
            break;
        case 5:
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = 'Have a wonderful day!';
    }

    res.json({
        welcomeMessage,
        dayMessage
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});