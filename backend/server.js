//Adding express and dotenv

const express = require('express')
const dotenv = require('dotenv').config()

//Adding a port
const port = process.env.PORT || 5000 //allows you to access the port variable in .env


const app = express()

app.get('/api/goals', (req,res) => {
    res.status(200).json({message: 'Get goals'})
})

app.listen(port, () => console.log(`Server started on port ${port}`))

