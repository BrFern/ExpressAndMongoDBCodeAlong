//Adding express and dotenv

const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

//Adding a port
const port = process.env.PORT || 5000 //allows you to access the port variable in .env


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


