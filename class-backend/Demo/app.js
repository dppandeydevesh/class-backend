const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', authRoutes);

module.exports = app;