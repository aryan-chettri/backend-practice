require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res)=>{

    res.send('Hello world')
})

app.get('/informationandrequirement', (req, res)=>{


    res.send('This port is already taken')
})

app.get('/contentcreation', (req, res)=>{

    res.send('This port is only for content creation')
})


app.get('/information', (req, res)=>{

    res.send('This is the information page')
})

app.listen(process.env.PORT, ()=> {

    console.log(`The app is successfully running in Port: ${process.env.PORT}`)
})