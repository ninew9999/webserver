const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true}));

const fakeUser = {
    username: = "pun",
    password: = "test"
};

app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <h2>ระบบเข้าสู่ระบบ</h2>
            <input type="text" name="username" placeholder="Username" required /><br><br>
            <input type="password" name="password" placeholder="Password" required /><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});