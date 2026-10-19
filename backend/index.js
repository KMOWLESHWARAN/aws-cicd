const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('AWS CI/CD Setup - Dev Branch Code!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
