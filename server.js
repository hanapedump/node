// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML files based on filename
app.get('/:page', (req, res) => {
    const page = req.params.page;

    // Check if the requested page is valid
    if (['page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html'].includes(page)) {
        res.sendFile(path.join(__dirname, 'public', page));
    } else {
        res.status(404).send('Page not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});