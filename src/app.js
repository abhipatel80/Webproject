const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/templates/views"));
hbs.registerPartials(path.join(__dirname, "../src/templates/partials"));
app.use(express.static(path.join(__dirname, "../public")));


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{ 
    res.render('about') 
})

app.get('/weather', (req, res)=>{
    res.render('weather')
}) 

app.get('*', (req, res)=>{
    res.render('404error',{
        errormsg: 'Oops! Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`Application is listening on ${port}`)
})

