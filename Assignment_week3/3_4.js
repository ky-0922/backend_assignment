const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            Username: <input name="username" /><br>
            Password: <input name="password" /><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`username: ${username}\npassword: ${password}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});