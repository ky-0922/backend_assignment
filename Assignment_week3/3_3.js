const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    const num = req.query.number;
    if (!num) return res.send('Insert number');
    res.redirect(`/factorial/${num}`);
});

app.get('/factorial/:number', (req, res) => {
    const n = parseInt(req.params.number);
    if (isNaN(n) || n < 0) return res.send('Invalid number');
    let f = 1;
    for (let i=2; i<=n; i++) f*=i;
    res.send(`${f}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});