const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Here you would typically handle the registration logic, e.g., saving the user to a database
  console.log('User registered:', { username, email, password });
  res.status(201).json({ message: 'User registered successfully' });
});


app.listen(8000, () => {
  console.log('Server is running on port:8000');
});












