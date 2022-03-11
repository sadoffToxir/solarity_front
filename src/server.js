const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080


const root = path.join(__dirname, '../', 'dist')
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(port, () => console.log("Listening on Port", port))

