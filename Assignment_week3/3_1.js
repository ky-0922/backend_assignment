const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function stringifyObject(obj) {
    return Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
}

app.get('/', (req, res) => {
    res.send(stringifyObject(req.query));
});

app.post('/', (req, res) => {
    res.send(stringifyObject(req.body));
});

app.put('/', (req, res) => {
    res.send(stringifyObject(req.body));
});

app.delete('/', (req, res) => {
    res.send(stringifyObject(req.body));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
