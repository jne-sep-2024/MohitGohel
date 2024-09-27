const express = require('express');
const { check } = require('./middleware/check');
const app = express();


// app.use(check)

app.get('/users', check, (req, res) => {
    try {

        console.log("User :", req.user);


        return res.status(200).json({ user: req.user })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }


})

app.post('/users', (req, res) => {
    try {

        console.log("User :", req.user);


        return res.status(200).json({ user: req.user })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }


})


app.listen(3000, () => {
    console.log("Server is started");

});
