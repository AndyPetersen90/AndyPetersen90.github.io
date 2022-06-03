const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()

require('dotenv').config()
app.use(express.json())
app.use(cors())


app.use("/", express.static(path.join(__dirname, "../")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get("/style", (req, res) => {
    res.sendFile(path.join(__dirname, "../style.css"))
})


const port = process.env.PORT || 5432
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})