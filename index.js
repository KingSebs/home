const express = require('express')
const app = express()
const port = 80

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.send('src/index.html')
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})