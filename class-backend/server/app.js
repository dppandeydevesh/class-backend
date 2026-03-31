const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const homePageContent = {
    header: { title: "GLA Header" },
    content: { title: "GLA Content" },
    footer: { title: "GLA Footer" },
    data: {
        universityName: "GLA University",
        students: [
            { name: "Student 1", dept: "CSE" },
            { name: "Student 2", dept: "CSE" },
        ],
},
};

app.get('/', (req, res) => {
    res.render('home', homePageContent.data);
});
app.get('/header', (req, res) => {
    res.render('header', homePageContent.header);
});
app.get('/content', (req, res) => {
    res.render('content', homePageContent.content);
});
app.get('/footer', (req, res) => {
    res.render('footer', homePageContent.footer);
});

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', authRoutes);

module.exports = app;