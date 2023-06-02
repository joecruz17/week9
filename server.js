const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()


app.get('/greeting/:name', async (req, res) => {
    const name = req.params.name
    res.send(`whats gucci ${name}`);
})

app.listen(3000,() =>
    console.log('Server is running')
)